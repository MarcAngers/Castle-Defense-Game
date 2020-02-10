using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class CharacterService : ICharacterServices
    {
        public Character GetCharacter(string name, string team, int side)
        {
            return new Character(name, team, side);
        }
        public Character GetWeirdo(int price, int side)
        {
            return new Character(price, side);
        }

        public int GetPrice(string name, string team)
        {
            using (StreamReader r = new StreamReader("./characters/" + team + "/" + name + ".json"))
            {
                var json = r.ReadToEnd();
                try
                {
                    var obj = Newtonsoft.Json.Linq.JObject.Parse(json);
                    int price = 0;
                    price = (int)obj.SelectToken("price");

                    if (price == 0)
                        return 1000000;
                    else
                        return price;
                } catch (Exception e)
                {
                    return 1000000;
                }
            }
        }

        public string GetHTML(string name, string team)
        {
            using (StreamReader r = new StreamReader("./characters/" + team + "/" + name + ".json"))
            {
                var json = r.ReadToEnd();
                var obj = Newtonsoft.Json.Linq.JObject.Parse(json);

                return (string)obj.SelectToken("html");
            }
        }

        public string[] GetTeam(string team)
        {
            using (StreamReader r = new StreamReader("./characters/fullteams/" + team + ".json"))
            {
                var json = r.ReadToEnd();
                var obj = Newtonsoft.Json.Linq.JObject.Parse(json);

                var list = new List<string>();

                foreach (var e in obj.SelectToken("team"))
                    list.Add((string)e);

                return list.ToArray();
            }
        }
    }
}
