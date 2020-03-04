import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { Cloud } from '../cloud';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loggedIn = false;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  background: HTMLImageElement;
  clouds: Cloud[];
  nextCloud: number;

  constructor() { }

  ngOnInit() {
    var modal = document.getElementById("instruction-modal");
    var open = document.getElementById("instructions");
    var close = <HTMLElement>document.getElementsByClassName("close")[0];

    this.canvas = <HTMLCanvasElement> document.getElementById("background-canvas");
    this.context = this.canvas.getContext("2d");

    this.background = new Image();
    this.background.src = "../../assets/img/background/background default.png";

    this.clouds = [];
    this.nextCloud = Math.floor(Math.random() * 25);

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
    
    this.draw_background();

    // LOGIN LOGIC VVV
    /*document.getElementById("login-button").addEventListener("click", async () => {
      let username = (<any>document.getElementById("username")).value;
      let password = (<any>document.getElementById("password")).value;

      let tempData = await AppComponent.userServices.Login(username, password);
      AppComponent.user = User.parseUser(tempData);

      if (AppComponent.user.name != "new_user") {
        this.loggedIn = true;
        document.getElementById("login").innerHTML = "";
        document.getElementById("user-info").innerHTML = "Logged in as: " + AppComponent.user.name;
      }
    });*/
  }

  draw_background = () => {
    if (this.nextCloud > 0)
      this.nextCloud--;
    else {
      this.nextCloud = Math.floor(Math.random() * 40);
      this.clouds.push(new Cloud());
    }
    
    this.context.drawImage(this.background, 0, 0);

    if (typeof this.clouds != 'undefined')
      this.clouds.forEach((cloud) => {
        cloud.draw(this.context);
      })

    setTimeout(this.draw_background, 100);
  }
}