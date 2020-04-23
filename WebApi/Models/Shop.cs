using System;
using System.Collections.Generic;
using WebApi.Services;

namespace WebApi.Models
{
    public class Shop
    {
        private Game Game;
        private CharacterService CharacterServices { get; set; }
        private Dictionary<string, Cooldown>[] Cooldowns { get; set; }

        public Shop (Game game)
        {
            this.Game = game;
            this.CharacterServices = new CharacterService();
            this.Cooldowns = new Dictionary<string, Cooldown>[2];
            this.Cooldowns[0] = new Dictionary<string, Cooldown>();
            this.Cooldowns[1] = new Dictionary<string, Cooldown>();
        }

        public void Buy(Player player, string name)
        {
            if (this.Game.State >= GameState.Ended)
                return;
            if (name == null || name == "")
                return;

            double price = 1000000;

            if (name == "income")
            {
                price = player.IncomePrice;
                if (player.SpendMoney(price))
                    player.AddIncome();
                return;
            }
            if (name == "health")
            {
                price = player.HealthPrice;
                if (player.SpendMoney(price))
                    player.AddHealth();
                return;
            }

            // Special logic for weirdo
            if (name == "weirdo")
            {
                Random r = new Random();
                price = r.NextDouble() * player.Money;
                if (this.CheckCooldown(player.Side, name, price) && price >= 2 && player.SpendMoney(price))
                {
                    this.AddUnitCooldown(player.Side, name);
                    player.BuyUnit(name);
                    this.Game.AddUnit(this.CharacterServices.GetWeirdo((int)price, player.Side));
                }
            }

            price = this.CharacterServices.GetPrice(name, player.Team);
            if (this.CheckCooldown(player.Side, name, price) && player.SpendMoney(price))
            {
                this.AddUnitCooldown(player.Side, name);
                player.BuyUnit(name);
                this.Game.AddUnit(this.CharacterServices.GetCharacter(name, player.Team, player.Side));
            }
        }

        public bool CheckCooldown(int side, string name, double price)
        {
            Dictionary<string, Cooldown> currentCooldowns = this.Cooldowns[side - 1];
            if (currentCooldowns.ContainsKey(name))
            {
                currentCooldowns.TryGetValue(name, out Cooldown cooldown);
                return cooldown.CheckCooldown();
            }
            else
            {
                Cooldown cooldown = new Cooldown(side, name, (int)price);
                cooldown.notEnoughChargesEvent += Cooldown_notEnoughChargesEvent;
                cooldown.enoughChargesEvent += Cooldown_enoughChargesEvent;

                currentCooldowns.Add(name, cooldown);
                return cooldown.CheckCooldown();
            }
        }

        private void Cooldown_notEnoughChargesEvent(int side, string name)
        {
            this.Game.AddCooldown(side, name);
        }
        private void Cooldown_enoughChargesEvent(int side, string name)
        {
            this.Game.RemoveCooldown(side, name);
        }

        public void AddUnitCooldown(int side, string name)
        {
            this.Cooldowns[side - 1].TryGetValue(name, out Cooldown cooldown);
            cooldown.AddUnit();
        }

        public void Refresh()
        {
            foreach(KeyValuePair<string, Cooldown> entry in this.Cooldowns[0])
            {
                entry.Value.Refresh();
            }
            foreach (KeyValuePair<string, Cooldown> entry in this.Cooldowns[1])
            {
                entry.Value.Refresh();
            }
        }
    }
}
