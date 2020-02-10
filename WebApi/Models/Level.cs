using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace WebApi.Models
{
    public class Level
    {
        public string Team { get; set; }
        public int Income { get; set; }
        public int Health { get; set; }
        public string[] Units { get; set; }
        public int[] Times { get; set; }
        public string[] Recurring { get; set; }
        public int[] Intervals { get; set; }

        public Level(int id)
        {
            this.getLevelFromJSON(id);
        }

        public Level(string team, int income, int health)
        {
            this.Team = team;
            this.Income = income;
            this.Health = health;
        }

        private void getLevelFromJSON(int id)
        {
            using (StreamReader r = new StreamReader("./levels.json"))
            {
                var json = r.ReadToEnd();
                var obj = JObject.Parse(json);
                var level = obj.SelectToken(""+id);

                this.Team = (string)level.SelectToken("team");
                this.Health = (int)level.SelectToken("health");
                this.Income = (int)level.SelectToken("income");
                this.Units = level.SelectToken("units").ToObject<string[]>();
                this.Times = level.SelectToken("times").ToObject<int[]>();
                this.Recurring = level.SelectToken("recurring").ToObject<string[]>();
                this.Intervals = level.SelectToken("intervals").ToObject<int[]>();
            }
        }
    }
}
