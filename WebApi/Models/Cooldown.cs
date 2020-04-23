using System;

namespace WebApi.Models
{
    public class Cooldown
    {
        private int Side { get; set; }
        private string Name { get; set; }
        private double Charges { get; set; }
        private int MaxCharges { get; set; }
        private double RefreshRate { get; set; }

        public delegate void NotEnoughCharges(int side, string name);
        public event NotEnoughCharges notEnoughChargesEvent;
        public delegate void EnoughCharges(int side, string name);
        public event EnoughCharges enoughChargesEvent;

        public Cooldown(int side, string name, int price)
        {
            this.Side = side;
            this.Name = name;
            this.MaxCharges = (int) Math.Ceiling(25.0 / price);
            this.Charges = this.MaxCharges;

            if (price > 50)
                price = 50;
            this.RefreshRate = Math.Round(0.1 / price, 3);
        }

        public bool CheckCooldown()
        {
            return this.Charges >= 1;
        }

        public void AddUnit()
        {
            this.Charges--;
            if (this.Charges < 1)
                notEnoughChargesEvent(this.Side, this.Name);
        }

        public void Refresh()
        {
            if (this.Charges < this.MaxCharges)
            {
                bool noCharges = this.Charges < 1;
                this.Charges += this.RefreshRate;
                if (noCharges && this.Charges > 1)
                    enoughChargesEvent(this.Side, this.Name);
            }
        }
    }
}
