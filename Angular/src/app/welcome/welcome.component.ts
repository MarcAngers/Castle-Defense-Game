import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loggedIn = false;

  constructor() { }

  ngOnInit() {
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
}
