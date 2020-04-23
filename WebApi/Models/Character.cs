using System;
using System.IO;
using System.Linq;

namespace WebApi.Models
{
    public class Character
    {
        public string Name { get; set; }
        public int Price { get; set; }
        public double Health { get; set; }
        public double MaxHealth { get; set; }
        public int Damage { get; set; }
        public string Type { get; set; }
        public int Speed { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public int Size { get; set; }
        public bool Stopped { get; set; }
        public bool Dead { get; set; }
        public string Team { get; set; }
        public int Side { get; set; }
        public CollisionEffect AttackEffect { get; set; }
        public CollisionEffect DefendEffect { get; set; }

        public int UnitsKilled { get; set; }
        public double DamageDone { get; set; }
        public double CastleDamageDone { get; set; }


        public Character(int side)
        {
            this.Side = side;
            if (side == 1)
                this.X = 150;
            else
                this.X = 1300;

            this.AttackEffect = new CollisionEffect();
            this.DefendEffect = new CollisionEffect();

            this.UnitsKilled = 0;
            this.DamageDone = 0;
            this.CastleDamageDone = 0;
        }
        public Character(string name, string team)
        {
            this.GetCharacterFromJSON(name, team);
            this.Stopped = false;
            this.Dead = false;

            this.AttackEffect = new CollisionEffect();
            this.DefendEffect = new CollisionEffect();
        }
        public Character(int price, int side) : this(side)
        {
            Random r = new Random();

            this.Name = "weirdo";
            this.Price = 0;
            this.Health = Math.Ceiling(r.NextDouble() * 10) + price;
            this.MaxHealth = this.Health;
            this.Damage = (int)(Math.Ceiling(r.NextDouble() * 10) + price);
            string[] tempteams = { "white", "black", "green", "blue", "purple", "yellow", "orange", "red" };
            this.Type = tempteams[r.Next(tempteams.Length)];
            this.Speed = (int)(r.NextDouble() * 14) + 3;
            this.Size = 100;
            this.Y = 350;
            this.Y = this.Y + (-25 + r.Next(51));
            this.Team = "black";
            this.Stopped = false;
            this.Dead = false;
        }

        public Character(string name, string team, int side) : this(name, team)
        {
            this.Side = side;
            if (side == 1)
                this.X = 150;
            else
                this.X = 1300;
        }

        private void GetCharacterFromJSON(string name, string team)
        {
            using (StreamReader r = new StreamReader("./characters/" + team + "/" + name + ".json"))
            {
                var json = r.ReadToEnd();
                var obj = Newtonsoft.Json.Linq.JObject.Parse(json);

                this.Name = name;
                this.Price = (int)obj.SelectToken("price");
                this.Health = (double)obj.SelectToken("health");
                this.MaxHealth = this.Health;
                this.Damage = (int)obj.SelectToken("damage");
                this.Type = (string)obj.SelectToken("type");
                this.Speed = (int)obj.SelectToken("speed");
                this.Size = (int)obj.SelectToken("size");
                this.Y = (int)obj.SelectToken("y");
                Random rand = new Random();
                this.Y = this.Y + (-25 + rand.Next(51));
                this.Team = (string)obj.SelectToken("team");
            }
        }

        public void Update()
        {
            if (this.Health <= 0)
            {
                this.Die();
                return;
            }
            if (this.AttackEffect.Stance != "None")
            {
                this.AttackEffect.Linger--;
                if (this.AttackEffect.Linger <= 0)
                    this.AttackEffect = new CollisionEffect();
            }
            if (this.DefendEffect.Stance != "None")
            {
                this.DefendEffect.Linger--;
                if (this.DefendEffect.Linger <= 0)
                    this.DefendEffect = new CollisionEffect();
            }
            this.Move();   
        }
        private void Move()
        {
            if (this.Stopped)
            {
                this.Stopped = false;
                return;
            }
            if (this.Side == 1)
                this.X += this.Speed;
            else
                this.X -= this.Speed;

        }
        public void Collide(Character opponent)
        {
            if (opponent.Dead)
                return;

            bool max = false;
            string type = opponent.Type;
            if (type.Substring(Math.Max(0, type.Length - 4)) == "_MAX")
            {
                max = true;
                type = type.Substring(0, (type.Length - 4));
            }

            Game.Advantages.TryGetValue(type, out string[] advantaged);
            Game.Disadvantages.TryGetValue(type, out string disadvantaged);

            if (advantaged.Contains(this.Team))
            {
                this.Health -= opponent.Damage * 1.5;
                opponent.DamageDone += opponent.Damage * 1.5;
                if (this.Health <= 0)
                    opponent.UnitsKilled++;
                this.DefendEffect = new CollisionEffect("defend", CollisionResult.Enhanced, this.Team);
                opponent.AttackEffect = new CollisionEffect("attack", CollisionResult.Enhanced, opponent.Type);
                this.Recoil(CollisionResult.Enhanced);
                return;
            }
            else if (disadvantaged == this.Team && !max)
            {
                this.Health -= opponent.Damage * 0.67;
                opponent.DamageDone += opponent.Damage * 0.67;
                if (this.Health <= 0)
                    opponent.UnitsKilled++;
                this.DefendEffect = new CollisionEffect("defend", CollisionResult.Mitigated, this.Team);
                opponent.AttackEffect = new CollisionEffect("attack", CollisionResult.Mitigated, opponent.Type);
                this.Recoil(CollisionResult.Mitigated);
                return;
            }
            else
            {
                this.Health -= opponent.Damage;
                opponent.DamageDone += opponent.Damage;
                if (this.Health <= 0)
                    opponent.UnitsKilled++;
                this.DefendEffect = new CollisionEffect();
                opponent.AttackEffect = new CollisionEffect();
                this.Recoil(CollisionResult.Normal);
                return;
            }
        }
        public void Recoil(CollisionResult collisionResult)
        {
            this.Stopped = true;

            int operation(int side, int magnitude)
            {
                if (side == 1)
                    return this.X - (magnitude * this.Speed);
                else
                    return this.X + (magnitude * this.Speed);
            }

            this.X = operation(this.Side, (int)collisionResult);
        }
        public void Die()
        {
            this.Dead = true;
            this.Damage = 0;
            if (this.Side == 1)
                this.X = -10000;
            else
                this.X = 10000;
            this.Y = 10000;
        }
    }
}
