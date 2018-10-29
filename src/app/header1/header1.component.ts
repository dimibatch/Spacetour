import { Component, OnInit } from '@angular/core';

declare var TweenMax;


@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  public writtenPlanet;
  
  
  constructor() { }

  

  ngOnInit() {
    
  }
  
  
  // public autoScroll(){
  //   let pos = parseInt(window.pageYOffset.toString());
  //   let proxy: any = { y: pos };
  //   TweenMax.to(
  //     proxy,
  //     2,
  //     {
  //       y: 0,
  //       onUpdate: function () {
  //         window.scrollTo(0, proxy.y);
  //       }
  //     }
  //   );
  // }

  public autoScroll(){
    let pos = parseInt(window.pageYOffset.toString());
    let proxy: any = { y: pos };
    TweenMax.to(
      proxy,
      1,
      {
        y: 400,
        onUpdate: function () {
          window.scrollTo(0, proxy.y);
        }
      }
    );
  }
  

  public jupiSelect () {
    if (this.writtenPlanet.toUpperCase() == "MERCURY"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "mercury";
    }
    if (this.writtenPlanet.toUpperCase() == "VENUS"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "venus";
    }
    if (this.writtenPlanet.toUpperCase() == "EARTH"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "earth";
    }
    if (this.writtenPlanet.toUpperCase() == "MARS"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "mars";
    }
    if (this.writtenPlanet.toUpperCase() == "JUPITER"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "jupiter";
    }
    if (this.writtenPlanet.toUpperCase() == "SATURN"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "saturn";
    }
    if (this.writtenPlanet.toUpperCase() == "NEPTUNE"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "neptune";
    }
    if (this.writtenPlanet.toUpperCase() == "URANUS"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "uranus";
    }
    if (this.writtenPlanet.toUpperCase() == "PLUTO"){
      (document.getElementById('destination-select')as HTMLInputElement).value = "pluto";
    }
  }
}
