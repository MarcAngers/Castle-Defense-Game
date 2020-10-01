import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from './unit';
import { Player } from '../player';
import { Castle } from './castle'

import { GameService } from '../../services/game.service';

import { HubConnectionBuilder } from '@aspnet/signalr';
import { Cloud } from '../cloud';
import { CharacterBarComponent } from '../character-bar/character-bar.component';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css', '../character-bar/character-bar.component.css']
})

export class GameComponent implements OnInit, AfterViewInit {
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

  private clouds: Cloud[];
  private nextCloud: number;

  public gameResult: string = "";
  public player1Stats: any = {
    TotalIncome: {Item1: "-", Item2: "0"},
    UnitsBought: {Item1: "-", Item2: "0"},
    FavoriteUnit: {Item1: "-", Item2: "0"},
    MostKills: {Item1: "-", Item2: "0"},
    MostDamage: {Item1: "-", Item2: "0"},
    MostCastleDamage: {Item1: "-", Item2: "0"},
  };
  public player2Stats: any = {
    TotalIncome: {Item1: "-", Item2: "0"},
    UnitsBought: {Item1: "-", Item2: "0"},
    FavoriteUnit: {Item1: "-", Item2: "0"},
    MostKills: {Item1: "-", Item2: "0"},
    MostDamage: {Item1: "-", Item2: "0"},
    MostCastleDamage: {Item1: "-", Item2: "0"},
  };
  public player1FavoriteUnitIcon: string = "../../assets/img/icons/question icon.png";
  public player1MostKillsIcon: string = "../../assets/img/icons/question icon.png";
  public player1MostDamageIcon: string = "../../assets/img/icons/question icon.png";
  public player1MostCastleDamageIcon: string = "../../assets/img/icons/question icon.png";
  public player2FavoriteUnitIcon: string = "../../assets/img/icons/question icon.png";
  public player2MostKillsIcon: string = "../../assets/img/icons/question icon.png";
  public player2MostDamageIcon: string = "../../assets/img/icons/question icon.png";
  public player2MostCastleDamageIcon: string = "../../assets/img/icons/question icon.png";

  constructor(private route: ActivatedRoute, private gameServices: GameService) { 
    this.background = new Image();
    this.background.src = "../../assets/img/background/background default.png";
  }

  @ViewChild(CharacterBarComponent) 
    characterbar: CharacterBarComponent;

  ngOnInit() {
    this.player1 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));
    this.player2 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));

    this.route.paramMap.subscribe(map => {
      var mapParams = <any> map;
      this.id = mapParams.params.id;
      this.team = mapParams.params.team;
      this.side = mapParams.params.side;
      if (this.side == 1)
        this.connectedPlayer = this.player1;
      else if (this.side == 2)
        this.connectedPlayer = this.player2;
      else
        this.connectedPlayer = new Player(0, 0, 0, 0, 3, new Castle(0, 0, "white", 0, 0, 0));
    });

    this.clouds = [
      new Cloud(100),
      new Cloud(600),
      new Cloud(900),
      new Cloud(1300),
    ];
    this.nextCloud = Math.floor(Math.random() * 25);

    this.units = new Array<Unit>();

    if (this.side == 1)
      this.init();
    else
      this.gameServices.init(this.team, this.id);
  }

  ngAfterViewInit() {
    let connection = new HubConnectionBuilder()
      .withUrl("/gamehub")
      .build();

    connection.start().then(() => {
      console.log("connected!");
      connection.invoke("connectedto", this.id);
    });

    connection.on("UpdateUnits", (unitData) => {
      this.units = Unit.parseUnits(unitData);
      window.requestAnimationFrame(() => this.draw());
    });
    connection.on("UpdatePlayers", (playerData) => {
      this.player1.updatePlayer(playerData, 0);
      this.player2.updatePlayer(playerData, 1);
    });
  
    connection.on("EndGame", async(side) => {
      this.player1Stats = await this.gameServices.getPlayerStats(this.id, 1);
      this.player2Stats = await this.gameServices.getPlayerStats(this.id, 2);
      
      this.player1FavoriteUnitIcon = "../../assets/img/icons/" + (<any>this.player1Stats).FavoriteUnit.Item1 + " icon.png";
      this.player1MostKillsIcon = "../../assets/img/icons/" + (<any>this.player1Stats).MostKills.Item1 + " icon.png";
      this.player1MostDamageIcon = "../../assets/img/icons/" + (<any>this.player1Stats).MostDamage.Item1 + " icon.png";
      this.player1MostCastleDamageIcon = "../../assets/img/icons/" + (<any>this.player1Stats).MostCastleDamage.Item1 + " icon.png";
      this.player2FavoriteUnitIcon = "../../assets/img/icons/" + (<any>this.player2Stats).FavoriteUnit.Item1 + " icon.png";
      this.player2MostKillsIcon = "../../assets/img/icons/" + (<any>this.player2Stats).MostKills.Item1 + " icon.png";
      this.player2MostDamageIcon = "../../assets/img/icons/" + (<any>this.player2Stats).MostDamage.Item1 + " icon.png";
      this.player2MostCastleDamageIcon = "../../assets/img/icons/" + (<any>this.player2Stats).MostCastleDamage.Item1 + " icon.png";

      if (side == this.side) {
        this.gameResult = "VICTORY";
        document.getElementById("endgame-modal-content").style.backgroundColor = "#ccffcc";
      }
      else if (this.side > 2)
        this.gameResult = "PLAYER " + side + " WINS";
      else {
        this.gameResult = "DEFEAT";
        document.getElementById("endgame-modal-content").style.backgroundColor = "#ffcccc";
      }

      document.getElementById("endgame-modal").style.display = "block";
    });

    connection.onclose(() => {
      if (this.side >= 3)
        return;
      document.getElementById("endgame-modal").style.display = "none";      
      this.gameServices.end(this.id);
      this.reset();
      delete(this.gameServices);
    });

    this.canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    var menuButton = document.getElementById("main-menu");
    menuButton.onmouseup = () => {
      connection.stop();
    }

    connection.on("AddCooldown", (side, name) => {
      if (this.connectedPlayer.side != side)
        return;
      this.characterbar.addCooldown(name);
    });
    connection.on("RemoveCooldown", (side, name) => {
      if (this.connectedPlayer.side != side)
        return;
      this.characterbar.removeCooldown(name);
    })
  }

  public init = async() => {
    await this.gameServices.init(this.team, this.id);

    if (this.id < 1000 || this.id > 10000)
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

    if (typeof this.clouds != 'undefined')
      this.clouds.forEach((cloud) => {
        cloud.draw(ctx);
      });
    if (this.nextCloud > 0)
      this.nextCloud--;
    else {
      this.nextCloud = Math.floor(Math.random() * 50);
      this.clouds.push(new Cloud());
    }
    
    if (this.side < 3) {
      ctx.fillStyle = "black";
      ctx.font = "50px serif";
      ctx.fillText("Money: $" + Math.floor(this.connectedPlayer.money), 10, 45);
      ctx.font = "14px serif";
      ctx.fillText("Income: $" + Math.floor(this.connectedPlayer.income * 600) + "/min", 12, 60);
      if (this.id >= 1000) {
        ctx.font = "14px serif";
        ctx.fillText("Game ID: " + this.id, 1410, 15);
      }
    }

    if (connected) {
      this.player1.castle.draw(ctx);
      this.player2.castle.draw(ctx);
    }
  }

  reset = () => {
    this.player1 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));
    this.player2 = new Player(0, 0, 0, 0, 0, new Castle(0, 0, "white", 0, 0, 0));
    this.units = new Array<Unit>();

    this.route.paramMap.subscribe(map => {
      var mapParams = <any> map;
      this.id = mapParams.params.id;
      this.team = mapParams.params.team;
      this.side = mapParams.params.side;
      if (this.side == 1)
        this.connectedPlayer = this.player1;
      else if (this.side == 2)
        this.connectedPlayer = this.player2;
      else
        this.connectedPlayer = new Player(0, 0, 0, 0, 3, new Castle(0, 0, "white", 0, 0, 0));
    });

    document.getElementById("main-menu").style.display = "none";
  }
}
