using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ComputerPlayer : Player
    {
        public Level Level { get; set; }
        public ComputerPlayer(int id) : base()
        {
            this.Level = new Level(id);

            this.Side = 2;
            this.Team = this.Level.Team;
            this.Income += this.Level.Income;

            this.Castle = new Castle(this.Level.Team, 2, this.Level.Health);
        }
    }
}
