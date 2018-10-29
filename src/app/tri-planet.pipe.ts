import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triPlanet'
})
export class TriPlanetPipe implements PipeTransform {

  transform(destinations: any[], param_destination: string= null): any {
    
    let results: any[] = [];
    let currentDestinations : string;
    let i :number = 0;

    for( i = 0 ; i < destinations.length; i++){

      currentDestinations = destinations[i].destination;

      if (currentDestinations.toLowerCase().indexOf(param_destination.toLowerCase()) > -1){
        results.push(destinations[i]);
      }
    }

    return results
  }

}
