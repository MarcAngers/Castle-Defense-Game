import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {
  team = "white";
  id = 1000;
  idIsNew = false;

  constructor() { }

  ngOnInit() {
    document.getElementById("game-id").onchange = () => {
      this.checkId();
    }

    var modal = document.getElementById("instruction-modal");
    var open = document.getElementById("instructions");
    var close = <HTMLElement>document.getElementsByClassName("close")[0];

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
}
