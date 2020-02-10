using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class LevelService : ILevelServices
    {
        public Level GetLevel(int id)
        {
            return new Level(id);
        }
    }
}
