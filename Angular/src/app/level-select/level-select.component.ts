import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.css']
})
export class LevelSelectComponent implements OnInit {
  team = "white";
  id = 1;
  side = 1;

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

  checkGame = async() => {
    document.getElementById("start").addEventListener("click", () => {});
    this.updateTeam();
    this.id = await this.gameServices.getLevelID(this.id);
    this.router.navigate(["../game/", this.id, this.team, this.side]);
  }
  updateTeam = () => {
    this.team = document.getElementsByClassName("selected")[1].id;
  }
}
