import { Component, OnInit } from '@angular/core';
import { Cloud } from '../cloud';
import { GameService } from 'src/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {
  team = "white";
  id = 1000;
  allIDsandStates = {};
  gameIDs = [];

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  background: HTMLImageElement;
  clouds: Cloud[];
  nextCloud: number;

  constructor(private router: Router, private gameServices: GameService) { }

  ngOnInit() {
    this.updateGamesAsync();

    var instructionModal = document.getElementById("instruction-modal");
    var browserModal = document.getElementById("game-browser-modal");
    var instructionOpen = document.getElementById("instructions");
    var browserOpen = document.getElementById("game-browser");
    var instructionClose = <HTMLElement>document.getElementsByClassName("close")[0];
    var browserClose = <HTMLElement>document.getElementsByClassName("close")[1];

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

    instructionOpen.onclick = () => {
      instructionModal.style.display = "block";
    }
    browserOpen.onclick = () => {
      this.updateGamesAsync();
      browserModal.style.display = "block";
    }

    instructionClose.onclick = () => {
      instructionModal.style.display = "none";
    }
    browserClose.onclick = () => {
      browserModal.style.display = "none";
    }

    window.onclick = (event) => {
      if (event.target == instructionModal) {
          instructionModal.style.display = "none";
      }
      if (event.target == browserModal) {
        browserModal.style.display = "none";
      }
    }

    document.getElementById("game-id").onchange = () => {
      document.getElementById("jg").classList.add("unverified");
    }

    this.draw_background();
  }

  updateGamesAsync = async() => {
    var jsonData = await this.gameServices.getAllGameIDsAndStates();
    var obj = <Object>jsonData;
    console.log(obj);
    this.allIDsandStates = obj;
    if (Object.keys(this.allIDsandStates))
      this.gameIDs = Object.keys(this.allIDsandStates);
    else
      this.gameIDs = [];
  }

  setId = (id: number) => {
    this.id = id;
    document.getElementById("game-browser-modal").style.display = "none";
    (<any>document.getElementById("game-id")).value = this.id;
    document.getElementById("jg").classList.remove("unverified");
  }
  updateTeam = () => {
    this.team = document.getElementsByClassName("selected")[0].id;
  }
  getNewId = () => {
    this.id = Math.floor((Math.random() * 9000) + 1000);
    while (this.id in this.allIDsandStates)
      this.id = Math.floor((Math.random() * 9000) + 1000);
  }
  tryId = (): boolean => {
    this.id = <number>(<any>document.getElementById("game-id")).value;
    
    if (this.id < 1000 || this.id > 9999)
      return false;
    if (!(this.id in this.allIDsandStates))
      return false;
    if (this.allIDsandStates[this.id] != 1)
      return false;
    return true;
  }

  newGame = async() => {
    await this.updateGamesAsync();
    this.getNewId();
    this.updateTeam();
    this.router.navigate(["../game", this.id, this.team, 1]);
  }
  joinGame = async() => {
    //let side = 2;
    await this.updateGamesAsync();
    if (!this.tryId()) {
      alert("The ID entered is invalid! Check to make sure the entered ID is correct.\n(or it's just a bug lol)");
      return;
    }
    this.updateTeam();
    this.router.navigate(["../game", this.id, this.team, 2]);
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
