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
        public int Health { get; set; }
        public int MaxHealth { get; set; }
        public int Damage { get; set; }
        public int Speed { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public int Size { get; set; }
        public bool Stopped { get; set; }
        public bool Dead { get; set; }
        public string Team { get; set; }
        public int Side { get; set; }
        public string HTML { get; set; }


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
            this.Health = (int)(Math.Ceiling(r.NextDouble() * 10) + price);
            this.MaxHealth = this.Health;
            this.Damage = (int)(Math.Ceiling(r.NextDouble() * 10) + price);
            this.Speed = (int)(r.NextDouble() * 14) + 3;
            this.Size = 100;
            this.Y = 350;
            this.Y = this.Y + (-25 + r.Next(51));
            this.Team = "black";
            this.HTML = "<div class='character' id='weirdo'><label class='price black-unit'>$?</label><img src='../../assets/img/icons/weirdo icon.png'></div>";

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
                this.Health = (int)obj.SelectToken("health");
                this.MaxHealth = this.Health;
                this.Damage = (int)obj.SelectToken("damage");
                this.Speed = (int)obj.SelectToken("speed");
                this.Size = (int)obj.SelectToken("size");
                this.Y = (int)obj.SelectToken("y");
                Random rand = new Random();
                this.Y = this.Y + (-25 + rand.Next(51));
                this.Team = (string)obj.SelectToken("team");
                this.HTML = (string)obj.SelectToken("html");
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
