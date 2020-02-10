using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    interface ILevelServices
    {
        Level GetLevel(int id);
    }
}
