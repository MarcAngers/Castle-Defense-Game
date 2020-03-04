import { Component, OnInit } from '@angular/core';
//import { User } from './user';
//import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //public static user: User;
  public static teamMap: Map<string, string[]>;


  constructor(private http: HttpClient, private characterServices: CharacterService/*, private userServices: UserService*/) {
    //AppComponent.user = new User(this.userServices);
  }

  ngOnInit() {
    AppComponent.teamMap = new Map<string, string[]>();
    this.setupTeamMap();
  }

  setupTeamMap = async() => {
    AppComponent.teamMap.set("white", await this.characterServices.getTeam("white"));
    AppComponent.teamMap.set("green", await this.characterServices.getTeam("green"));
    AppComponent.teamMap.set("blue", await this.characterServices.getTeam("blue"));
    AppComponent.teamMap.set("purple", await this.characterServices.getTeam("purple"));
    AppComponent.teamMap.set("yellow", await this.characterServices.getTeam("yellow"));
    AppComponent.teamMap.set("orange", await this.characterServices.getTeam("orange"));
    AppComponent.teamMap.set("red", await this.characterServices.getTeam("red"));
    AppComponent.teamMap.set("black", await this.characterServices.getTeam("black"));
  }
}