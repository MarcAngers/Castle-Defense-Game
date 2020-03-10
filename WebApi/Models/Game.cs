using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using WebApi.Controllers;
using WebApi.Hubs;
using WebApi.Services;

namespace WebApi.Models
{
    public class Game
    {
        public CharacterService CharacterServices { get; set; }

        public static Dictionary<string, string[]> Advantages { get; set; }
        public static Dictionary<string, string> Disadvantages { get; set; }
        public List<Character> Units { get; set; }
        public int Id { get; set; }
        public Player Player1 { get; set; }
        public Player Player2 { get; set; }
        public bool Multiplayer { get; set; }
        public GameState State { get; set; }

        public Game()
        {
            this.Id = 0;
            this.State = GameState.New;
        }

        public void Init(string team, int id)
        {
            this.State = GameState.Initialized;
            this.Id = id;
            this.Player1 = new Player(team, 1);
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
        public void StartComputerPlayer()
        {
            for (var i = 0; i < ((ComputerPlayer)(this.Player2)).Level.Units.Length; i++)
            {
                var unit = ((ComputerPlayer)(this.Player2)).Level.Units[i];
                var time = ((ComputerPlayer)(this.Player2)).Level.Times[i];

                _ = Task.Run(async () =>
                {
                      await Task.Delay(time);
                      this.Buy(this.Player2, unit);
                });
            }
            for (var i = 0; i < ((ComputerPlayer)(this.Player2)).Level.Recurring.Length; i++)
            {
                var unit = ((ComputerPlayer)(this.Player2)).Level.Recurring[i];
                var interval = ((ComputerPlayer)(this.Player2)).Level.Intervals[i];

                _ = Task.Run(async () =>
                {
                    while (this.State != GameState.Ended)
                    {
                        await Task.Delay(interval);
                        this.Buy(this.Player2, unit);
                    }
                });
            }
        }
        public async void Play()
        {
            this.State = GameState.InProgress;
            this.Units = new List<Character>();
            this.CharacterServices = new CharacterService();

            if (!this.Multiplayer)
                this.StartComputerPlayer();

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
                            this.Units[i].Recoil();
                        if (this.Units[i].X <= lead2pos && this.Units[i].Side == 2)
                            this.Units[i].Recoil();
                    }
                    return;
                }
                // Unit/Castle collision
                // Hardcoded Castle positions... might want to change later
                if (1375 - (lead1pos + lead1.Size) < 3)
                {
                    this.Player2.Castle.Siege(lead1);
                    lead1.Recoil();
                    for (var i = 0; i < this.Units.Count; i++)
                        if (this.Units[i].X + this.Units[i].Size >= lead1pos && this.Units[i].Side == 1)
                            this.Units[i].Recoil();
                }
                if (lead2pos - 125 < 3)
                {
                    this.Player1.Castle.Siege(lead2);
                    lead2.Recoil();
                    for (var i = 0; i < this.Units.Count; i++)
                        if (this.Units[i].X <= lead2pos && this.Units[i].Side == 2)
                            this.Units[i].Recoil();
                }
            }

            if (this.Player1.Castle.Dead || this.Player2.Castle.Dead)
                this.State = GameState.Ended;
        }

        public void Buy(Player player, string name)
        {
            if (this.State >= GameState.Ended)
                return;
            if (name == null || name == "")
                return;

            double price = 1000000;

            if (name == "income")
            {
                price = player.IncomePrice;
                if (player.SpendMoney(price))
                    player.AddIncome();
                return;
            }
            if (name == "health")
            {
                price = player.HealthPrice;
                if (player.SpendMoney(price))
                    player.AddHealth();
                return;
            }

            // Special logic for weirdo
            if (name == "weirdo")
            {
                Random r = new Random();
                price = r.NextDouble() * player.Money;
                if (price >= 2 && player.SpendMoney(price))
                    this.Units.Add(this.CharacterServices.GetWeirdo((int)price, player.Side));
            }

            price = this.CharacterServices.GetPrice(name, player.Team);
            if (player.SpendMoney(price))
            {
                this.Units.Add(this.CharacterServices.GetCharacter(name, player.Team, player.Side));
            }
        }
    }
}
