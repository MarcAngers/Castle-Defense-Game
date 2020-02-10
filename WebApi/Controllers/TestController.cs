using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using WebApi.Hubs;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private IHubContext<GameHub> _hubContext;
        public TestController(IHubContext<GameHub> hubContext)
        {
            _hubContext = hubContext;
        }
        
        [Route("test")]
        public ActionResult<string> Test()
        {
            return "Hello from test!";
        }

        [Route("hubtest")]
        public IActionResult HubTest()
        {
            _hubContext.Clients.All.SendAsync("test");
            return Ok();
        }
    }
}