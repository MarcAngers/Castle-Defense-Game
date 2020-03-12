using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class CollisionEffect
    {
        public string Stance { get; set; }
        public CollisionResult CollisionType { get; set; }
        public string Color { get; set; }
        public int Linger { get; set; }

        public CollisionEffect()
        {
            this.Stance = "None";
        }
        public CollisionEffect(string stance, CollisionResult type, string color)
        {
            this.Stance = stance;
            this.CollisionType = type;
            this.Color = color;
            this.Linger = 4;
        }
    }
}
