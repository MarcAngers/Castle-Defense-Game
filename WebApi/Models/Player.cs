using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WebApi.Models
{
    public class Player
    {
        public double Money { get; set; }
        public double TotalIncome { get; set; }
        public double Income { get; set; }
        public double IncomePrice { get; set; }
        public int IncomeIncreases { get; set; }
        public double HealthPrice { get; set; }
        public Castle Castle { get; set; }
        public string Team { get; set; }
        public int Side { get; set; }
        public Dictionary<string, int> UnitsBought { get; set; }
        public Tuple<string, int> MostKills { get; set; }
        public Tuple<string, int> MostDamage { get; set; }
        public Tuple<string, int> MostCastleDamage { get; set; }

        public Player()
        {
            this.Money = 0;
            this.TotalIncome = 0;
            this.Income = 0.05;
            this.IncomeIncreases = 0;
            this.IncomePrice = 4;
            this.HealthPrice = 5;
            this.UnitsBought = new Dictionary<string, int>();

            this.MostKills = new Tuple<string, int>("None", 0);
            this.MostDamage = new Tuple<string, int>("None", 0);
            this.MostCastleDamage = new Tuple<string, int>("None", 0);
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
            this.TotalIncome += this.Income;
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
            this.Income += 0.04;
            this.IncomeIncreases++;
            this.IncomePrice = Math.Pow(4.0, (this.IncomeIncreases + 5.0) / 5.0);
        }
        public void AddHealth()
        {
            this.Castle.Health += (int)(this.Castle.MaxHealth * 0.25);
            this.Castle.MaxHealth += (int)(this.Castle.MaxHealth * 0.25);
            this.HealthPrice += 2.5;
        }

        public void BuyUnit(string name)
        {
            if (!this.UnitsBought.Keys.Contains<string>(name))
                this.UnitsBought.Add(name, 1);
            else
            {
                this.UnitsBought[name]++;
            }
        }
        public void AddStats(Character unit)
        {
            if (unit.UnitsKilled > this.MostKills.Item2)
                this.MostKills = new Tuple<string, int>(unit.Name, unit.UnitsKilled);
            if (unit.DamageDone > this.MostDamage.Item2)
                this.MostDamage = new Tuple<string, int>(unit.Name, (int)unit.DamageDone);
            if (unit.CastleDamageDone > this.MostCastleDamage.Item2)
                this.MostCastleDamage = new Tuple<string, int>(unit.Name, (int)unit.CastleDamageDone);
        }

        public Dictionary<string, Tuple<string, int>> GetAllStats()
        {
            Dictionary<string, Tuple<string, int>> result = new Dictionary<string, Tuple<string, int>>();
            result.Add("TotalIncome", new Tuple<string, int>("TotalIncome", (int)this.TotalIncome));

            Tuple<string, int> favoriteUnit = new Tuple<string, int>("None", 0);
            int totalUnitsBought = 0;
            foreach(KeyValuePair<string, int> entry in this.UnitsBought)
            {
                if (entry.Value > favoriteUnit.Item2)
                    favoriteUnit = new Tuple<string, int>(entry.Key, entry.Value);
                totalUnitsBought += entry.Value;
            }
            result.Add("UnitsBought", new Tuple<string, int>("UnitsBought", totalUnitsBought));
            result.Add("FavoriteUnit", favoriteUnit);
            result.Add("MostKills", this.MostKills);
            result.Add("MostDamage", this.MostDamage);
            result.Add("MostCastleDamage", this.MostCastleDamage);

            return result;
        }
    }
}
