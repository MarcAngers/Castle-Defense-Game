using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    interface IGameServices
    {
        void Init(int id, string team);
        void Play(int id);
        void End(int id);
        void Buy(int id, int player, string unit);
        int GetIncomePrice(int id, int player);
        double GetHealthPrice(int id, int player);
    }
}
