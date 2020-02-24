import { Component, OnInit, OnChanges } from '@angular/core';
import { CharacterInfo } from './characterInfo';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit, OnChanges {
  team: string = "white";
  name: string = "doggo";
  
  character: CharacterInfo = new CharacterInfo("white", "unknown");
  fullTeam: any;
  next: string = "doggo";
  prev: string = "doggo";
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      var mapParams = <any> map;
      this.team = mapParams.params.team;
      this.name = mapParams.params.name;

      this.character = new CharacterInfo(this.team, this.name);

    this.fullTeam = AppComponent.teamMap.get(this.team);
    var index = this.fullTeam.indexOf(this.name);
    this.next = this.fullTeam[(index+1)%8];
    if (index == 0)
      this.prev = this.fullTeam[7];
    else
      this.prev = this.fullTeam[index-1];

    document.getElementById("main-view").style.backgroundColor = this.team;
    });
  }

  ngOnChanges() {
    
  }
}
