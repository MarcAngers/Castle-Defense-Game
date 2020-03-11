using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

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


        public Character(int side)
        {
            this.Side = side;
            if (side == 1)
                this.X = 150;
            else
                this.X = 1300;
        }
        public Character(string name, string team)
        {
            this.GetCharacterFromJSON(name, team);
            this.Stopped = false;
            this.Dead = false;
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
            if (type.Substring(type.Length - 4) == "_MAX")
            {
                max = true;
                type = type.Substring(0, (type.Length - 4));
            }

            string[] advantaged;
            Game.Advantages.TryGetValue(type, out advantaged);
            string disadvantaged;
            Game.Disadvantages.TryGetValue(type, out disadvantaged);

            if (advantaged.Contains(this.Team))
                this.Health -= opponent.Damage * 1.5;
            else if (disadvantaged == this.Team && !max)
                this.Health -= opponent.Damage * 0.67;
            else 
                this.Health -= opponent.Damage;
            
            this.Recoil();
        }
        public void Recoil()
        {
            this.Stopped = true;

            if (this.Side == 1)
                this.X -= 2 * this.Speed;
            else
                this.X += 2 * this.Speed;
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
