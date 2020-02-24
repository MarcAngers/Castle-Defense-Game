import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {

  team = "white";

  constructor() { }

  ngOnInit() {
    var teams = document.getElementsByClassName("team");
    
    for (var i = 0; i < teams.length; i++) {
      teams[i].addEventListener("mouseup", (e) => {
        var team = <HTMLElement> e.target;
        for (var i = 0; i < teams.length; i++)
          teams[i].classList.remove("selected");
        team.classList.add("selected");
      });
    }
  }
}