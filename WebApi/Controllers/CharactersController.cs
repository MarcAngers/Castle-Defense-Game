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
    public class CharactersController : ControllerBase
    {
        private readonly ICharacterServices _services;

        public CharactersController()
        {
            _services = new CharacterService();
        }

        [HttpGet("getCharacter/{team=white}/{name=doggo}")]
        public ActionResult<Character> GetCharacter(string team, string name, int side)
        {
            var character = _services.GetCharacter(name, team, side);

            if (character == null)
                return NotFound();

            return character;
        }

        [HttpGet("getPrice/{team=white}/{name=doggo}")]
        public ActionResult<int> GetPrice(string team, string name)
        {
            int price = 1000000;
            if (_services != null)
                price = _services.GetPrice(name, team);

            if (price <= 0)
                return NotFound();

            return price;
        }

        [HttpGet("getHTML/{team=white}/{name=doggo}")]
        public ActionResult<string> GetHTML(string team, string name)
        {
            var html = _services.GetHTML(name, team);

            if (html == null)
                return NotFound();

            return html;
        }

        [HttpGet("getTeam/{team=white}")]
        public ActionResult<string[]> GetTeam(string team)
        {
            var fullTeam = _services.GetTeam(team);

            if (fullTeam == null)
                return NotFound();

            return fullTeam;
        }

        [HttpGet("getInfo/{team=white}/{name=doggo}")]
        public ActionResult<CharacterInfo> GetInfo(string team, string name)
        {
            var characterInfo = _services.GetInfo(team, name);

            if (characterInfo == null)
                return NotFound();

            return characterInfo;
        }

        [HttpGet("test")]
        public ActionResult<string> Test()
        {
            return "character test";
        }
    }
}