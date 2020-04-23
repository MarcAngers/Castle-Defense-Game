using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Controllers;

namespace WebApi.Models
{
    public class Game
    {
        public Shop Shop { get; set; }
        public static Dictionary<string, string[]> Advantages { get; set; }
        public static Dictionary<string, string> Disadvantages { get; set; }
        private List<Character> Units { get; set; }
        public int Id { get; set; }
        public Player Player1 { get; set; }
        public Player Player2 { get; set; }
        private bool Multiplayer { get; set; }
        public GameState State { get; set; }
        private int Tick { get; set; }
        private int ComputerUnit { get; set; }

        public Game()
        {
            this.Tick = 0;
            this.ComputerUnit = 0;
            this.Id = 0;
            this.State = GameState.New;
        }

        public void Init(string team, int id)
        {
            this.State = GameState.Initialized;
            this.Id = id;
            this.Player1 = new Player(team, 1);
            this.Shop = new Shop(this);
            List<Player> playerData = new List<Player>() {
                    this.Player1
            };
            GameController.UpdatePlayersFor(this.Id, playerData);
        }
        public void AddPlayer(string team)
        {
            this.Multiplayer = true;
            this.Player2 = new Player(team, 2);
            // Multiplayer castle health increase (move to somewhere else?)
            this.Player1.Castle.SetMultiplayerHealth();
            this.Player2.Castle.SetMultiplayerHealth();

            List<Player> playerData = new List<Player>() {
                    this.Player1,
                    this.Player2
            };
            GameController.UpdatePlayersFor(this.Id, playerData);
        }
        public void AddComputer()
        {
            this.Multiplayer = false;
            this.Player2 = new ComputerPlayer(this.Id);
        }

        public void CheckComputerUnit()
        {
            int gameTime = this.Tick * 100;

            if (this.ComputerUnit >= ((ComputerPlayer)this.Player2).Level.Times.Length)
                return;

            var unit = ((ComputerPlayer)(this.Player2)).Level.Units[this.ComputerUnit];
            var time = ((ComputerPlayer)(this.Player2)).Level.Times[this.ComputerUnit];

            if (gameTime >= time)
            {
                this.Shop.Buy(this.Player2, unit);
                this.ComputerUnit++;
            }
        }
        public void CheckComputerIntervals()
        {
            int gameTime = this.Tick * 100;

            for (var i = 0; i < ((ComputerPlayer)(this.Player2)).Level.Recurring.Length; i++)
            {
                var unit = ((ComputerPlayer)(this.Player2)).Level.Recurring[i];
                var interval = ((ComputerPlayer)(this.Player2)).Level.Intervals[i];

                if (gameTime % interval == 0)
                    this.Shop.Buy(this.Player2, unit);
            }
        }
        public async void Play()
        {
            this.State = GameState.InProgress;
            this.Units = new List<Character>();

            while (this.State != GameState.Delete)
            {
                GameController.UpdateUnitsFor(this.Id, this.Units);
                List<Player> playerData = new List<Player>() {
                    this.Player1,
                    this.Player2
                };
                GameController.UpdatePlayersFor(this.Id, playerData);

                if (this.State == GameState.InProgress)
                {
                    this.Player1.GetMoney();
                    this.Player2.GetMoney();
                }

                for (var i = 0; i < this.Units.Count; i++)
                {
                    var unit = this.Units[i];
                    if (unit.Dead)
                        this.Units.Remove(unit);
                    if (unit.X < -100 || unit.X > 1600)
                        this.Units.Remove(unit);
                }
                for (var i = 0; i < this.Units.Count; i++)
                {
                    this.Units[i].Update();
                }
                if (this.Units.Count > 0)
                    this.CheckForCollisions();

                if (this.State >= GameState.Ended)
                {
                    if (this.Player1.Castle.Dead)
                        GameController.EndGame(this.Id, 2);
                    else
                        GameController.EndGame(this.Id, 1);

                    for (var i = 0; i < this.Units.Count; i++)
                        this.Units[i].Damage = 0;
                }
                this.Shop.Refresh();
                this.Tick++;
                if (!this.Multiplayer)
                {
                    this.CheckComputerUnit();
                    this.CheckComputerIntervals();
                }
                await Task.Delay(100);
            }
        }
        public void CheckForCollisions()
        {
            int lead1pos = 0;
            int lead2pos = 1450;
            Character lead1 = new Character(1);
            Character lead2 = new Character(2);

            // Find the lead characters on each team
            for (var i = 0; i < this.Units.Count; i++)
            {
                var unit = this.Units[i];
                if (unit.Side == 1 && ((unit.X + unit.Size) > lead1pos))
                {
                    lead1pos = unit.X + unit.Size;
                    lead1 = unit;
                }
                if (unit.Side == 2 && unit.X < lead2pos)
                {
                    lead2pos = unit.X;
                    lead2 = unit;
                }
            }

            // Collision detection
            if (lead1pos > 0 || lead2pos < 1450)
            {
                // Unit/Unit collision
                if (lead2pos - lead1pos < 3)
                {
                    lead1.Collide(lead2);
                    lead2.Collide(lead1);
                    for (var i = 0; i < this.Units.Count; i++)
                    {
                        if (this.Units[i].X + this.Units[i].Size >= lead1pos && this.Units[i].Side == 1)
                            this.Units[i].Recoil(CollisionResult.Normal);
                        if (this.Units[i].X <= lead2pos && this.Units[i].Side == 2)
                            this.Units[i].Recoil(CollisionResult.Normal);
                    }
                    return;
                }
                // Unit/Castle collision
                // Hardcoded Castle positions... might want to change later
                if (1375 - (lead1pos + lead1.Size) < 3)
                {
                    this.Player2.Castle.Siege(lead1);
                    lead1.Recoil(CollisionResult.Normal);
                    for (var i = 0; i < this.Units.Count; i++)
                        if (this.Units[i].X + this.Units[i].Size >= lead1pos && this.Units[i].Side == 1)
                            this.Units[i].Recoil(CollisionResult.Normal);
                }
                if (lead2pos - 125 < 3)
                {
                    this.Player1.Castle.Siege(lead2);
                    lead2.Recoil(CollisionResult.Normal);
                    for (var i = 0; i < this.Units.Count; i++)
                        if (this.Units[i].X <= lead2pos && this.Units[i].Side == 2)
                            this.Units[i].Recoil(CollisionResult.Normal);
                }
            }

            if (this.Player1.Castle.Dead || this.Player2.Castle.Dead)
                this.State = GameState.Ended;
        }

        public void AddUnit(Character character)
        {
            this.Units.Add(character);
        }

        public void AddCooldown(int side, string name)
        {
            GameController.AddCooldown(this.Id, side, name);
        }
        public void RemoveCooldown(int side, string name)
        {
            GameController.RemoveCooldown(this.Id, side, name);
        }
    }
}
