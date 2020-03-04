export class Cloud {
    x: number;
    y: number;
    speed: number;
    image: HTMLImageElement;

    constructor() {
        this.x = 1500;
        this.y = Math.floor(Math.random() * 150);
        this.speed = Math.floor(Math.random() * (15 - 5) + 5);

        var id = Math.floor(Math.random() * (4 - 1) + 1);
        this.image = new Image();
        this.image.src = "../../assets/img/background/clouds/cloud" + id + ".png";
    }

    draw = (ctx: CanvasRenderingContext2D) => {
        ctx.drawImage(this.image, this.x, this.y);
        this.x -= this.speed;
    }
}