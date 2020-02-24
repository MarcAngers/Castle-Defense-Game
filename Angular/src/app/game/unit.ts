export class Unit {
    side: number;

    health: number;
    maxHealth: number;

    x: number;
    y: number;
    size: number;

    sprite: HTMLImageElement;

    constructor(name: string, side: number, health: number, maxHealth: number, size: number, x: number, y = 400) {
        this.sprite = new Image();
        this.sprite.src = "../assets/img/units/" + name + side + ".png"

        this.side = side;
     
        this.health = health;
        this.maxHealth = maxHealth;
        this.size = size;
        
        this.x = x;
        this.y = y;
    }

    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);

        let currentHealth = this.health/this.maxHealth;
        let width = (this.size + 10) * currentHealth;
        if (width < 0)
            width = 0;

        if (currentHealth > 0.75)
        context.fillStyle = "green";
            else if (currentHealth > 0.30)
        context.fillStyle = "yellow";
            else if (currentHealth > 0.10)
        context.fillStyle = "red";
            else
        context.fillStyle = "darkred";

        context.fillRect(this.x - 5, this.y - 10, width, 5);
    };

    public static parseUnits(data): Unit[] {
        var units: Unit[];
        units = [];

        for (var i = 0; i < data.length; i++)
            units.push(new Unit(data[i].name, data[i].side, data[i].health, data[i].maxHealth, data[i].size, data[i].x, data[i].y));

        return units;
    }
}