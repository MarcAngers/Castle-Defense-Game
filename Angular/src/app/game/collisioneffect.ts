export class CollisionEffect {
    stance: string;
    type: string;
    color: string;

    icon: HTMLImageElement;
    attackEffect: HTMLImageElement;

    constructor(stance: string, collisionType: number, color: string) {
        this.stance = stance;
        if (collisionType == 2) 
            this.type = "mitigated";
        else
            this.type = "enhanced";
        this.color = color;

        this.icon = new Image();
        if (this.stance == "attack") {
            this.icon.src = "../assets/img/collisions/swords/" + this.color + " sword.png";
            this.attackEffect = new Image();
            this.attackEffect.src = "../assets/img/collisions/swords/" + this.type + ".png";
        } 
        if (this.stance == "defend") {
            this.icon.src = "../assets/img/collisions/shields/" + this.color + " shield " + this.type + ".png";
        }
    }

    draw = (context, x: number, y: number) => {
        if (this.stance == "attack") {
            context.drawImage(this.icon, x, y);
            context.drawImage(this.attackEffect, x, y + 15);
        }
        if (this.stance == "defend") {
            context.drawImage(this.icon, x + 30, y);
        }
    }

    public static parseCollisionEffect(data): CollisionEffect {
        return new CollisionEffect(data.stance, data.collisionType, data.color);
    }
}