using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    interface IUserServices
    {
        User Login(string username, string password);
        void Win(string username, int winnings);
    }
}
