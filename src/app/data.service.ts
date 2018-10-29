import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private planet = new BehaviorSubject('');
  currentMessage = this.planet.asObservable();

  private hotel = new BehaviorSubject('');
  currentHotel = this.hotel.asObservable();

  private offerPrice = new BehaviorSubject(' ');
  currentPrice = this.offerPrice.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.planet.next(message);
  }
  changeHotel(message:string) {
    this.hotel.next(message);
  }
  transformPrice(message:string) {
    this.offerPrice.next(message);
  }
}