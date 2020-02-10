using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _services;

        public UserController()
        {
            _services = new UserService();
        }

        [HttpGet("login/{username}/{password}")]
        public ActionResult<User> Login(string username, string password)
        {
            var user = _services.Login(username, password);

            if (user == null)
                return NotFound();

            return user;
        }

        [HttpGet("win/{username}/{id}")]
        public ActionResult<bool> Win(string username, int id)
        {
            if (id < 1000)
                _services.Win(username, id);
            else
                _services.Win(username, 5);

            return true;
        }

        [HttpGet("test")]
        public ActionResult<string> Test()
        {
            return "user test";
        }
    }
}