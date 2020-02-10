using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Controllers;
using WebApi.Models;

namespace WebApi.Services
{
    public class GameService : IGameServices
    {
        public void Init(int id, string team)
        {
            if (id == 0)
                return;
            Game toInit = Startup.GetGame(id);
            
            if (!toInit.Initialized)
            {
                toInit.Init(team, id);

                if (toInit.Id < 1000)
                    toInit.AddComputer();
            }
            else if (toInit.InProgress)
                return;
            else
                toInit.AddPlayer(team);
        }
        public void Play(int id)
        {
            if (id == 0)
                return;
            Game toPlay = Startup.GetGame(id);
            toPlay.Play();
        }
        public void End(int id)
        {
            if (id == 0)
                return;
            Startup.EndGame(id);
        }

        public void Buy(int id, int player, string unit)
        {
            if (id == 0)
                return;
            Game toBuy = Startup.GetGame(id);

            if (player == 1)
                toBuy.Buy(toBuy.Player1, unit);
            else
                toBuy.Buy(toBuy.Player2, unit);
        }
    }
}
