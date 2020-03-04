using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public enum GameState
    {
        New = 0,
        Initialized = 1,
        InProgress = 2,
        Ended = 3,
        Delete = 4
    }
}
