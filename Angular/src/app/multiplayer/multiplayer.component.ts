import { Component, OnInit } from '@angular/core';
import { Cloud } from '../cloud';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {
  team = "white";
  id = 1000;
  idIsNew = false;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  background: HTMLImageElement;
  clouds: Cloud[];
  nextCloud: number;

  constructor() { }

  ngOnInit() {
    document.getElementById("game-id").onchange = () => {
      this.checkId();
    }

    var modal = document.getElementById("instruction-modal");
    var open = document.getElementById("instructions");
    var close = <HTMLElement>document.getElementsByClassName("close")[0];

    this.canvas = <HTMLCanvasElement> document.getElementById("background-canvas");
    this.context = this.canvas.getContext("2d");

    this.background = new Image();
    this.background.src = "../../assets/img/background/background default.png";

    this.clouds = [
      new Cloud(100),
      new Cloud(600),
      new Cloud(900),
      new Cloud(1300),
    ];
    this.nextCloud = Math.floor(Math.random() * 25);

    open.onclick = function() {
      modal.style.display = "block";
    }

    close.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }

    this.draw_background();
  }

  updateTeam(): string {
    this.team = document.getElementsByClassName("selected")[0].id;
    return this.team;
  }
  newId(): number {
    if (this.id == 1000)
      this.id = Math.floor((Math.random() * 9000) + 1000);
    return this.id;
  }
  checkId = () => {
    let input = <number>(<any>document.getElementById("game-id")).value;
    if (input >= 1000 && input < 10000) {
      console.log(input);
      this.id = input;
      this.idIsNew = false;
    }
    else {
      this.id = 10000;
      this.idIsNew = false;
    }
  }

  draw_background = () => {
    if (this.nextCloud > 0)
      this.nextCloud--;
    else {
      this.nextCloud = Math.floor(Math.random() * 40);
      this.clouds.push(new Cloud());
    }
    
    this.context.drawImage(this.background, 0, 0);

    if (typeof this.clouds != 'undefined')
      this.clouds.forEach((cloud) => {
        cloud.draw(this.context);
      });

    setTimeout(this.draw_background, 100);
  }
}
