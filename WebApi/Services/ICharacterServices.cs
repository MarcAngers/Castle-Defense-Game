using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface ICharacterServices
    {
        Character GetCharacter(string name, string team, int side);
        int GetPrice(string name, string team);
        string GetHTML(string name, string team);
        string[] GetTeam(string team);
        CharacterInfo GetInfo(string team, string name);
    }
}
