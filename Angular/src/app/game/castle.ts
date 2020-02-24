export class Castle {  
  x: number;
  y: number;
  damage: number = 0;
  team: string;
  side: number;

  health: number;
  maxHealth: number;
  dead: boolean;

  img: HTMLImageElement;

  constructor(x: number, y: number, team: string, side: number, health = 100, maxHealth = 100, dead = false) { 
    this.x = x;
    this.y = y;
    this.team = team;
    this.side = side;
    this.health = health;
    this.maxHealth = maxHealth;
    this.dead = dead;

    this.img = new Image();
    this.img.src = "../assets/img/castles/" + team + " castle.png";
   }

  public draw(context) {
    if (this.health <= 0) {
      this.drawDead(context);
      return;
    }

    var ctx = context;
    let x = this.x;
    let y = this.y;

    ctx.drawImage(this.img, x, y);
    let width = 200 * (this.health/this.maxHealth);
    if (width < 0)
      width = 0;
    
    if (width > 75)
      context.fillStyle = "green";
    else if (width > 30)
      context.fillStyle = "yellow";
    else if (width > 10)
      context.fillStyle = "red";
    else
      context.fillStyle = "darkred";

    context.fillRect(this.x, this.y - 10, width, 5);

    let healthText = Math.round(this.health);
    let maxHealthText = Math.round(this.maxHealth);
    ctx.font = "10px serif";
    ctx.fillStyle = "black";
    ctx.fillText(healthText + "/" + maxHealthText, this.x + 85, this.y - 15);
  }

  public drawDead = (context) => {
    var ctx = context;
    var deadimg = new Image();
    deadimg.src = "../assets/img/castles/dead castle.png";
    
    let x = this.x;
    let y = this.y;
    ctx.drawImage(deadimg, x, y);
  }

  public static parseCastle(data): Castle {   
    return new Castle((data.side == 1) ? 50 : 1250, 250, data.team, data.side, data.health, data.maxHealth, data.dead);
  }
}
