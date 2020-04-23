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
        public double Health { get; set; }
        public double MaxHealth { get; set; }
        public bool Dead { get; set; }
        public CollisionEffect DefendEffect { get; set; }

        public Castle(string team, int side)
        {
            this.Team = team;
            this.Side = side;
            this.Health = 100;
            if (Castle.DefensiveTeams.Contains(this.Team))
                this.Health = this.Health * 1.5;
            this.MaxHealth = this.Health;
            this.Dead = false;
            this.DefendEffect = new CollisionEffect();
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
            if (castleAdvantages.Contains(opponent.Type))
            {
                this.Health -= opponent.Damage * 1.5;
                opponent.CastleDamageDone += opponent.Damage * 1.5;
                this.DefendEffect = new CollisionEffect("defend", CollisionResult.Enhanced, "castle");
                opponent.AttackEffect = new CollisionEffect("attack", CollisionResult.Enhanced, opponent.Type);
                _ = Task.Run(async () =>
                {
                    await Task.Delay(3000);
                    this.DefendEffect = new CollisionEffect();
                });
                if (this.Health <= 0)
                    this.Dead = true;
                return;
            }
            else
            {
                this.Health -= opponent.Damage;
                opponent.CastleDamageDone += opponent.Damage;
                if (this.Health <= 0)
                    this.Dead = true;
                return;
            }
        }

        public void SetMultiplayerHealth()
        {
            this.Health = 1000;
            if (Castle.DefensiveTeams.Contains(this.Team))
                this.Health = this.Health * 1.5;
            this.MaxHealth = this.Health;
        }
    }
}