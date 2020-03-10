using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Castle
    {
        public static string[] DefensiveTeams = { "white", "yellow", "blue", "red" };
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
            if (Castle.DefensiveTeams.Contains(this.Team))
                this.Health = (int)(this.Health * 1.5);
            this.MaxHealth = this.Health;
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

            string[] castleAdvantages;
            Game.Advantages.TryGetValue("castle", out castleAdvantages);
            if (castleAdvantages.Contains(opponent.Team))
                this.Health -= (int)(opponent.Damage * 1.5);
            else
                this.Health -= opponent.Damage;
            
            if (this.Health <= 0)
                this.Dead = true;
        }

        public void SetMultiplayerHealth()
        {
            this.Health = 1000;
            if (Castle.DefensiveTeams.Contains(this.Team))
                this.Health = (int)(this.Health * 1.5);
            this.MaxHealth = this.Health;
        }
    }
}