using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Hubs
{
    public class GameHub : Hub
    {
        public readonly static Dictionary<string, int> _connections = new Dictionary<string, int>();

        public void ConnectedTo(string gameId)
        {
            _connections.Add(Context.ConnectionId, int.Parse(gameId));
        }
        public void Test()
        {
            Clients.All.SendAsync("test");
        }
    }
}
