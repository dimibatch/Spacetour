import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NasaService } from '../nasa.service';
import { Observable } from'rxjs';

declare var TweenMax;

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  
  public givenPlanet;
  public image:string;
  public myService:NasaService;
  public char1:any;
  public char2:any;
  public char3:any;
  public char4:any;
  
  public exoplanetURL:string = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&select=pl_hostname,pl_orbsmax&format=json&where=pl_kepflag=1";

  constructor(private data:DataService, private nservice:NasaService) {  
  }

  
  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.givenPlanet = message);

    let imgUrl:string = "https://images-api.nasa.gov/search?q="+this.givenPlanet+"&media_type=image";

    this.nservice.getData(imgUrl).subscribe(
      (param)=>{
        this.image = param.collection.items[8].links[0].href;
      }
    )

    this.nservice.getData(this.exoplanetURL).subscribe(
      (param)=>{
        this.char1 = param[0].pl_orbsmax;
        this.char2 = param[1].pl_orbsmax;
        this.char3 = param[4].pl_orbsmax;
        this.char4 = param[5].pl_orbsmax;
        
      }
    )

    
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

  public jivaHill() {
    this.data.changeHotel('Jiva Hill Park Hotel')
  }
  public imperialGaroupe() {
    this.data.changeHotel('Hotel Imperial Garoupe')
  }
  public intercontinentalCarlton() {
    this.data.changeHotel('Hotel InterContinental Carlton')
  }
  public leRichelieu() {
    this.data.changeHotel('Hotel Le Richelieu')
  }
  public calaRossa() {
    this.data.changeHotel('Great Hotel de Cala Rossa')
  }
  public donCesar() {
    this.data.changeHotel('Hotel Don Cesar & Spa')
  }
  public vistaPalace() {
    this.data.changeHotel('Hotel Vista Palace')
  }
  public designSpa() {
    this.data.changeHotel('Hotel B Design & Spa')
  }
  public miramar() {
    this.data.changeHotel('Miramar Shopping Hotel')
  }
}
