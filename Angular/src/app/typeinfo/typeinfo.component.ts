import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeinfo',
  templateUrl: './typeinfo.component.html',
  styleUrls: ['./typeinfo.component.css']
})
export class TypeinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var modal = document.getElementById("instruction-modal");
    var open = document.getElementById("instructions");
    var close = <HTMLElement>document.getElementsByClassName("close")[0];

    close.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  }

}
