import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game.service';
import { Router } from '@angular/router';
import { Cloud } from '../cloud';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.css']
})
export class LevelSelectComponent implements OnInit {
  team = "white";
  id = 1;
  side = 1;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  background: HTMLImageElement;
  clouds: Cloud[];
  nextCloud: number;

  constructor(private gameServices: GameService, private router: Router) { }

  ngOnInit() {
    var levels = document.getElementsByClassName("level");
    
    for (var i = 0; i < levels.length; i++) {
      levels[i].addEventListener("click", (e) => {
        var level = <HTMLElement> e.target;
        this.id = Number(level.innerText);

        for (var i = 0; i < levels.length; i++)
          levels[i].classList.remove("selected");
        level.classList.add("selected");
      });
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

  checkGame = async() => {
    document.getElementById("start").addEventListener("click", () => {});
    this.updateTeam();
    this.id = await this.gameServices.getLevelID(this.id);
    this.router.navigate(["../game/", this.id, this.team, this.side]);
  }
  updateTeam = () => {
    this.team = document.getElementsByClassName("selected")[1].id;
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
