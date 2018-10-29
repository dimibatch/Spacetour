import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class NasaService {
  private http:Http;
  constructor(param_http:Http) {
    this.http = param_http;
   }

   public getData(url) {
     return this.http.get(url).pipe(
       map(
         (param_response:Response)=>{
           let myData = param_response.json();
           return myData;
         }
       )
     )
   }
}
