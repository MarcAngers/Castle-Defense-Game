import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  currentTeam: string = "white";
  currentUnits: string[];

  constructor() { }

  ngOnInit() {
    this.updateTeam();
    document.getElementById("team-info-view").onmouseup = () => {
      this.updateTeam();
    }
  }

  updateTeam = () => {
    this.currentTeam = document.getElementsByClassName("selected")[0].id;
    this.currentUnits = AppComponent.teamMap.get(this.currentTeam);
    document.getElementById("team-info-view").style.backgroundColor = ""+this.currentTeam;
  }
}
