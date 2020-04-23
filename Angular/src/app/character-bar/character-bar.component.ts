import { Component, Input, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { CharacterService } from '../../services/character.service'; 
import { AppComponent } from '../app.component';
import { ShopService } from '../../services/shopService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-bar',
  templateUrl: './character-bar.component.html',
  styleUrls: ['./character-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CharacterBarComponent implements OnInit, AfterViewInit {
  @Input('side') side: number;
  @Input('team') team: string;
  @Input('id') id: number;

  static shopServices: ShopService;

  incomePrice: number = -1;
  healthPrice: number = -1;

  constructor(private characterServices: CharacterService, private http: HttpClient) { }

  ngOnInit () {
    
  }
  ngAfterViewInit() {
    if (this.side >= 3)
      return;

    document.getElementById("character-bar").classList.add(this.team);

    CharacterBarComponent.shopServices = new ShopService(this.http);
    this.initBar();

    document.getElementById("income").onmouseup = async() => {
      await CharacterBarComponent.shopServices.buy(this.id, this.side, "income");
      this.incomePrice = await CharacterBarComponent.shopServices.getNewIncomePrice(this.id, this.side);
    }
    document.getElementById("health").onmouseup = async() => {
      await CharacterBarComponent.shopServices.buy(this.id, this.side, "health");
      this.healthPrice = await CharacterBarComponent.shopServices.getNewHealthPrice(this.id, this.side);
    }
  }

  async initBar() {
    var fullTeam = AppComponent.teamMap.get(this.team); 
    
    for (var i = 0; i < 8; i++) {
      let currentchar = fullTeam[i];
      let charprice = await this.characterServices.getPrice(this.team, currentchar);
      
      let charhtml = "<label class='price";
      if (this.team == "black") 
        charhtml += " black-unit";
      charhtml += "'>$" + charprice + "</label><img src='../../assets/img/icons/" + currentchar + " icon.png'>";

      document.getElementsByClassName("character")[i].innerHTML += charhtml;
      document.getElementsByClassName("cooldown")[i].id = currentchar + "cooldown";
      document.getElementsByClassName("character")[i].addEventListener("mouseup", (e) => {
        CharacterBarComponent.shopServices.buy(this.id, this.side, currentchar);
      });
    }

    this.getIncomePriceAsync();
    this.getHealthPriceAsync();
  }

  addCooldown = (name) => {
    document.getElementById(name+"cooldown").style.display = "inline-block";
  }
  removeCooldown = (name) => {
    document.getElementById(name+"cooldown").style.display = "none";
  }

  getIncomePriceAsync = async() => {
    this.incomePrice = await CharacterBarComponent.shopServices.getNewIncomePrice(this.id, this.side);
  }
  getHealthPriceAsync = async() => {
    this.healthPrice = await CharacterBarComponent.shopServices.getNewHealthPrice(this.id, this.side);
  }
}