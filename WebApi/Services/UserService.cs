using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class UserService : IUserServices
    {
        public User Login(string username, string password)
        {
            return new User(username, password);
        }
        public void Win(string username, int winnings)
        {
            User.Win(username, winnings);
        }
    }
}
