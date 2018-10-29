import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var TweenMax;

@Component({
  selector: 'app-descriptif-hotel',
  templateUrl: './descriptif-hotel.component.html',
  styleUrls: ['./descriptif-hotel.component.css']
})
export class DescriptifHotelComponent implements OnInit {
  public price:string = " ";
  public givenPlanet:any;
  public hotel:any;
  public specialPrice:any;

  constructor(private ndata:DataService) { }

  ngOnInit() {
    this.ndata.currentMessage.subscribe(message => this.givenPlanet = message);
    this.ndata.currentHotel.subscribe(message => this.hotel = message);
    this.ndata.currentPrice.subscribe(message => this.specialPrice = message);
  }

  public scrollTop(){
    let pos = parseInt(window.pageYOffset.toString());
    let proxy = { y: pos };
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

  public changePrice() {
    if ((document.getElementById("inputGroupSelect01")as HTMLInputElement).value == "1"){
      this.ndata.transformPrice('1800$');
    }
    else if ((document.getElementById("inputGroupSelect01")as HTMLInputElement).value == "2"){
      this.ndata.transformPrice('3600$');
    }
    else if ((document.getElementById("inputGroupSelect01")as HTMLInputElement).value == "3"){
      this.ndata.transformPrice('7700$');
    }
  }
}