import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { UserServices } from './userServices';
import { CharacterServices } from './game/characterServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public static user: User;
  public static userServices: UserServices;
  public static characterServices: CharacterServices;
  public static teamMap: Map<string, string[]>;


  constructor(http: HttpClient) {
    AppComponent.user = new User();
    AppComponent.userServices = new UserServices(http);
    AppComponent.characterServices = new CharacterServices(http);
  }

  ngOnInit() {
    AppComponent.teamMap = new Map<string, string[]>();
    this.setupTeamMap();
  }

  setupTeamMap = async() => {
    AppComponent.teamMap.set("white", await AppComponent.characterServices.getTeam("white"));
    AppComponent.teamMap.set("green", await AppComponent.characterServices.getTeam("green"));
    AppComponent.teamMap.set("blue", await AppComponent.characterServices.getTeam("blue"));
    AppComponent.teamMap.set("purple", await AppComponent.characterServices.getTeam("purple"));
    AppComponent.teamMap.set("yellow", await AppComponent.characterServices.getTeam("yellow"));
    AppComponent.teamMap.set("orange", await AppComponent.characterServices.getTeam("orange"));
    AppComponent.teamMap.set("red", await AppComponent.characterServices.getTeam("red"));
    AppComponent.teamMap.set("black", await AppComponent.characterServices.getTeam("black"));
  }
}