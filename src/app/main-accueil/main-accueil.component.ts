import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var TweenMax;

@Component({
  selector: 'app-main-accueil',
  templateUrl: './main-accueil.component.html',
  styleUrls: ['./main-accueil.component.css']
})
export class MainAccueilComponent implements OnInit {
  public chosenPlanet;

  constructor(private data:DataService) {
    
   }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.chosenPlanet = message);
    
  }

  public scrollTop(){
    let pos = parseInt(window.pageYOffset.toString());
    let proxy = { y: pos };
    TweenMax.to(
      proxy,
      1,
      {
        y: 200,
        onUpdate: function () {
          window.scrollTo(0, proxy.y);
        }
      }
    );
  }

  public changePlanet() {
    if ((document.getElementById("destination-select")as HTMLInputElement).value == "mercure"){
        // this.chosenPlanet = "Mercure";
        this.data.changeMessage("Mercury");
    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "venus"){
        // this.chosenPlanet = "Venus";
        this.data.changeMessage("Venus");
  
    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "earth"){
        // this.chosenPlanet = "Earth";
        this.data.changeMessage("Earth");
  
    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "mars"){
      // this.chosenPlanet = "Mars";
      this.data.changeMessage("Mars");

    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "jupiter"){
      // this.chosenPlanet = "Jupiter";
      this.data.changeMessage("Jupiter");
    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "saturn"){
      // this.chosenPlanet = "Saturn";
      this.data.changeMessage("Saturn");

    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "neptune"){
      // this.chosenPlanet = "Neptune";
      this.data.changeMessage("Neptune");
    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "uranus"){
      // this.chosenPlanet = "Uranus";
      this.data.changeMessage("Uranus");
    }
    else if ((document.getElementById("destination-select")as HTMLInputElement).value == "pluto"){
      // this.chosenPlanet = "Pluto";
      this.data.changeMessage("Pluto");
    }
  }

}
