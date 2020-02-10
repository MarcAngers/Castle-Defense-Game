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
    public class LevelController : ControllerBase
    {
        private readonly ILevelServices _services;

        public LevelController()
        {
            _services = new LevelService();
        }

        [HttpGet("getLevel/{id=1}")]
        public ActionResult<Level> GetLevel(int id)
        {
            var level = _services.GetLevel(id);

            if (level == null)
                return NotFound();

            return level;
        }

        [HttpGet("test")]
        public ActionResult<string> Test()
        {
            return "level test";
        }
    }
}