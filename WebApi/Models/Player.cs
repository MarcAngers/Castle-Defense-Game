using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Player
    {
        public double Money { get; set; }
        public double Income { get; set; }
        public double IncomePrice { get; set; }
        public int IncomeIncreases { get; set; }
        public double HealthPrice { get; set; }
        public Castle Castle { get; set; }
        public string Team { get; set; }
        public int Side { get; set; }

        public Player()
        {
            this.Money = 0;
            this.Income = 0.05;
            this.IncomeIncreases = 0;
            this.IncomePrice = 4;
            this.HealthPrice = 5;
        }
        public Player(string team, int side) : this()
        {
            this.Side = side;
            this.Team = team;
            this.Castle = new Castle(team, side);
        }

        public void GetMoney()
        {
            this.Money += this.Income;
        }
        public bool SpendMoney(double price)
        {
            if (this.Money < price)
                return false;
            this.Money -= price;
            return true;
        }

        public void AddIncome()
        {
            this.Income += 0.07;
            this.IncomeIncreases++;
            this.IncomePrice = Math.Round(Math.Pow(4, (this.IncomeIncreases + 5) / 5));
        }
        public void AddHealth()
        {
            this.Castle.Health += (int)(this.Castle.MaxHealth * 0.25);
            this.Castle.MaxHealth += (int)(this.Castle.MaxHealth * 0.25);
            this.HealthPrice += 2.5;
        }
    }
}
