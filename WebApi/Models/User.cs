using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace WebApi.Models
{
    public class User
    {
        public int Credits { get; set; }
        public string Username { get; set; }
        public string[] Unlocks { get; set; }
        public bool[] LevelWins { get; set; }

        public User(string username, string password)
        {
            this.GetUserFromJSON(username, password);
        }

        private void GetUserFromJSON(string username, string password)
        {
            bool success = false;
            using (StreamReader r = new StreamReader("./userList.json"))
            {
                var json = r.ReadToEnd();
                var obj = JObject.Parse(json);

                if ((string)obj.SelectToken(username) == password)
                    success = true;
            }

            if (success)
            {
                using (StreamReader r = new StreamReader("./userData.json"))
                {
                    var json = r.ReadToEnd();
                    var obj = JObject.Parse(json);
                    var user = obj.SelectToken(username);

                    this.Username = username;
                    this.Credits = (int)user.SelectToken("credits");
                    this.Unlocks = user.SelectToken("unlocks").ToObject<string[]>();
                    this.LevelWins = user.SelectToken("levelWins").ToObject<bool[]>();
                }
            }
        }

        public static void Win(string username, int winnings)
        {
            using (StreamReader r = new StreamReader("./userData.json"))
            {
                var json = r.ReadToEnd();
                var obj = JObject.Parse(json);
                var user = obj.SelectToken(username);

                int credits = (int)user.SelectToken("credits");
                credits += winnings;
                user.SelectToken("credits").Replace(credits);
            }
        }
    }
}
