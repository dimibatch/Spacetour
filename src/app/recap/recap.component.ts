import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  constructor(private rdata:DataService) { }
  public finalPrice:string;
  public finalHotel:string;
  public finalPlanet:string;

  ngOnInit() {
    this.rdata.currentMessage.subscribe(message => this.finalPlanet = message);
    this.rdata.currentHotel.subscribe(message => this.finalHotel = message);
    this.rdata.currentPrice.subscribe(message => this.finalPrice = message);
  }

}
