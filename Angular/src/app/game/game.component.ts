import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from './unit';
import { Player } from '../player';
import { Castle } from './castle'

import { GameService } from '../../services/game.service';

import { HubConnectionBuilder } from '@aspnet/signalr';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css', '../character-bar/character-bar.component.css']
})

export class GameComponent implements OnInit {
  public id: number;
  public team: string;
  public side: number;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private background: HTMLImageElement;

  private units: Unit[];
  private player1: Player;
  private player2: Player;
  private connectedPlayer: Player;

  private ended: number = 0;

  constructor(private route: ActivatedRoute, private gameServices: GameService) { 
    this.background = new Image();
    this.background.src = "../../assets/img/background default.png";
  }

  ngOnInit() {
    let connection = new HubConnectionBuilder()
      .withUrl("/gamehub")
      .build();

    connection.start().then(() => {
      console.log("connected!");
      connection.invoke("connectedto", this.id);
    });

    this.player1 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));
    this.player2 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));

    connection.on("test", function() {
      alert("TEST");
    });

    connection.on("UpdateUnits", (unitData) => {
      this.units = Unit.parseUnits(unitData);
      window.requestAnimationFrame(() => this.draw());
    });
    connection.on("UpdatePlayers", (playerData) => {
      this.player1.updatePlayer(playerData, 0);
      this.player2.updatePlayer(playerData, 1);
    });
    connection.on("EndGame", (side) => {
      this.ended = side;
    });
    connection.onclose(() => {
      document.getElementById("main-menu").style.display = "none";      
      this.gameServices.end(this.id);
      this.reset();
      delete(this.gameServices);
    })

    this.canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    var menuButton = document.getElementById("main-menu");
    menuButton.onmouseup = () => {
      connection.stop();
    }

    this.units = new Array<Unit>();

    this.route.paramMap.subscribe(map => {
      var mapParams = <any> map;
      this.id = mapParams.params.id;
      this.team = mapParams.params.team;
      this.side = mapParams.params.side;
      if (this.side == 1)
        this.connectedPlayer = this.player1;
      else
        this.connectedPlayer = this.player2;
    });

    if (this.side == 1)
      this.init();
    else
      this.gameServices.init(this.team, this.id);
  }

  public init = async() => {
    await this.gameServices.init(this.team, this.id);

    if (this.id < 1000)
      this.start();
    else
      this.waitForPlayer2();
  }

  public waitForPlayer2 = async() => {
    this.draw_background(false);

    if (this.player2.income < 0.01)
      setTimeout(this.waitForPlayer2, 250);
    else
      this.start();
  }

  public start = async() => {
    await this.gameServices.play(this.id);

    window.requestAnimationFrame(() => this.draw());
  }

  public async draw() {
    var ctx = this.context;

    this.draw_background();

    if (typeof this.units != 'undefined')
      this.units.forEach((unit) => {
        unit.draw(ctx);
      });
  }

  public draw_background(connected = true) {
    var ctx = this.context;
    
    ctx.drawImage(this.background, 0, 0)

    ctx.fillStyle = "black";
    ctx.font = "50px serif";
    ctx.fillText("Money: $" + Math.floor(this.connectedPlayer.money), 10, 45);
    ctx.font = "14px serif";
    ctx.fillText("Income: $" + Math.floor(this.connectedPlayer.income * 600) + "/min", 12, 60);
    if (this.id >= 1000) {
      ctx.font = "14px serif";
      ctx.fillText("Game ID: " + this.id, 1410, 15);
    }

    if (connected) {
      this.player1.castle.draw(ctx);
      this.player2.castle.draw(ctx);
    }

    if (this.ended)
      document.getElementById("main-menu").style.display = "block";
    if (this.ended != 0 && this.side != this.ended) {
      ctx.fillStyle = "red";
      ctx.font = "300px servif";
      ctx.fillText("DEFEAT!", 100, 300, 1300);
    }
    if (this.ended != 0 && this.side == this.ended) {
      this.context.fillStyle = "black";
      this.context.font = "300px serif"
      this.context.fillText("VICTORY!", 100, 300, 1300);
      //if (AppComponent.user.name != "new_user")
      //  AppComponent.user.win(this.id);
    }
  }

  reset = () => {
    this.player1 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));
    this.player2 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));
    this.units = new Array<Unit>();
    this.ended = 0;

    this.route.paramMap.subscribe(map => {
      var mapParams = <any> map;
      this.id = mapParams.params.id;
      this.team = mapParams.params.team;
      this.side = mapParams.params.side;
      if (this.side == 1)
        this.connectedPlayer = this.player1;
      else
        this.connectedPlayer = this.player2;
    });

    document.getElementById("main-menu").style.display = "none";
  }
}
