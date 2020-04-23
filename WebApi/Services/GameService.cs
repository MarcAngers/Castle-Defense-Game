using System;
using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.Services
{
    public class GameService : IGameServices
    {
        public void Init(int id, string team)
        {
            if (id <= 0)
                return;
            Game toInit = Startup.GetGame(id);
            
            if (toInit.State < GameState.Initialized)
            {
                toInit.Init(team, id);

                if (toInit.Id < 1000 || toInit.Id > 10000)
                    toInit.AddComputer();
            }
            else if (toInit.State < GameState.InProgress)
                toInit.AddPlayer(team);
        }
        public void Play(int id)
        {
            if (id <= 0)
                return;
            Game toPlay = Startup.GetGame(id);
            toPlay.Play();
        }
        public void End(int id)
        {
            if (id <= 0)
                return;
            Startup.EndGame(id);
        }

        public void Buy(int id, int player, string unit)
        {
            if (id <= 0)
                return;
            if (!Startup.GetAllGameIDs().Contains(id))
                return;

            Game toBuy = Startup.GetGame(id);

            if (player == 1)
                toBuy.Shop.Buy(toBuy.Player1, unit);
            else
                toBuy.Shop.Buy(toBuy.Player2, unit);
        }

        public int GetIncomePrice(int id, int player)
        {
            if (id <= 0)
                return -1;
            if (!Startup.GetAllGameIDs().Contains(id))
                return -1;

            Game toFind = Startup.GetGame(id);

            if (player == 1)
                return (int)Math.Round(toFind.Player1.IncomePrice);
            else
                return (int)Math.Round(toFind.Player2.IncomePrice);
        }
        public double GetHealthPrice(int id, int player)
        {
            if (id <= 0)
                return -1;
            if (!Startup.GetAllGameIDs().Contains(id))
                return -1;

            Game toFind = Startup.GetGame(id);

            if (player == 1)
                return toFind.Player1.HealthPrice;
            else
                return toFind.Player2.HealthPrice;
        }

        public int[] GetAllGameIDs()
        {
            return Startup.GetAllGameIDs().ToArray();
        }
        public Dictionary<int, int> GetAllGameIDsAndStates()
        {
            return Startup.GetAllGameIDsAndStates();
        }
        public int GetLevelID(int id)
        {
            if (id <= 0)
                return 1;
            if (!Startup.GetAllGameIDs().Contains(id))
                return id;
            else
            {
                int i = 10000 + id;
                while (Startup.GetAllGameIDs().Contains(i))
                    i += 1000;
                return i;
            }
        }
    }
}
