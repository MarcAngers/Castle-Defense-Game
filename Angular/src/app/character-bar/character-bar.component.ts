import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-character-bar',
  templateUrl: './character-bar.component.html',
  styleUrls: ['./character-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CharacterBarComponent implements OnInit {
  @Input('side') side: number;
  @Input('team') team: string;
  @Input('id') id: number;

  constructor() { }

  ngOnInit () {
    document.getElementById("character-bar").classList.add(this.team);

    this.initBar();

    document.addEventListener("mouseup", (e) => {
      var testForCharacter = <any>e;
      if (testForCharacter.target.parentElement)
        var target = <HTMLElement> testForCharacter.target.parentElement;
      else
        return;

      if (target.id != "" && target.classList.contains("character")) {
        GameComponent.gameServices.buy(this.id, this.side, target.id);
        return;
      }
    });
  }

  async initBar() {
    var fullTeam = AppComponent.teamMap.get(this.team); 
    
    for (var i = 0; i < 8; i++) {
      let charhtml = await AppComponent.characterServices.getHTML(this.team, fullTeam[i]);
      console.log(charhtml);
      document.getElementById("character-bar").innerHTML += charhtml;
    }
  }
}