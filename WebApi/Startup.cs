using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using WebApi.Hubs;
using WebApi.Models;

namespace WebApi
{
    public class Startup
    {
        public static List<Game> GameInstances;
        public static Game GetGame(int id)
        {
            for (var i = 0; i < Startup.GameInstances.Count; i++)
            {
                var instance = Startup.GameInstances[i];
                if (instance.Id == id)
                    return instance;
            }

            Game newGame = new Game();
            Startup.GameInstances.Add(newGame);
            return newGame;
        }
        public static List<int> GetAllGameIDs()
        {
            List<int> allIDs = new List<int>();
            for (var i = 0; i < Startup.GameInstances.Count; i++)
            {
                allIDs.Add(Startup.GameInstances[i].Id);
            }
            return allIDs;
        }
        public static Dictionary<int, int> GetAllGameIDsAndStates()
        {
            Dictionary<int, int> allIDsandStates = new Dictionary<int, int>();
            for (var i = 0; i < Startup.GameInstances.Count; i++)
            {
                allIDsandStates.Add(Startup.GameInstances[i].Id, (int)Startup.GameInstances[i].State);
            }
            return allIDsandStates;
        }
        public static void EndGame(int id)
        {
            if (id == 0)
                return;
            for (var i = 0; i < Startup.GameInstances.Count; i++)
            {
                var instance = Startup.GameInstances[i];
                if (instance.Id == id)
                {
                    instance.State = GameState.Delete;
                    Startup.GameInstances.Remove(instance);
                }
            }
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            Startup.GameInstances = new List<Game>();
            using (StreamReader r = new StreamReader("./characters/typeadvantages.json"))
            {
                var json = r.ReadToEnd();
                Game.Advantages = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, string[]>>(json);
            }
            using (StreamReader r = new StreamReader("./characters/typedisadvantages.json"))
            {
                var json = r.ReadToEnd();
                Game.Disadvantages = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
            }
            services.AddControllers();
            services.AddCors(options => options.AddPolicy("CorsPolicy",
            builder =>
            {
                builder.AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowAnyOrigin();
            }));
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseCors("CorsPolicy");
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", context => context.Response.WriteAsync("Hello world"));
                endpoints.MapControllerRoute("test", "{controller=test}/{action=test}");
                endpoints.MapControllerRoute("characters", "{controller=characters}/{action=test}");
                endpoints.MapControllerRoute("level", "{controller=level}/{action=test}");
                endpoints.MapControllerRoute("game", "{controller=game}/{action=test}");
                endpoints.MapHub<GameHub>("/gamehub");
            });
        }
    }
}
