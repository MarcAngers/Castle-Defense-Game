using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Castle
    {
        public int Side { get; set; }
        public string Team { get; set; }
        public int Health { get; set; }
        public int MaxHealth { get; set; }
        public bool Dead { get; set; }

        public Castle(string team, int side)
        {
            this.Team = team;
            this.Side = side;
            this.Health = 100;
            this.MaxHealth = 100;
            this.Dead = false;
        }
        public Castle(string team, int side, int health) : this(team, side)
        {
            this.Health += health;
            this.MaxHealth += health;
        }

        public void Siege(Character opponent)
        {
            if (opponent.Dead)
                return;

            this.Health -= opponent.Damage;
            if (this.Health <= 0)
                this.Dead = true;
        }

        public void SetHealth(int newHealth)
        {
            this.Health = newHealth;
            this.MaxHealth = newHealth;
        }
    }
}