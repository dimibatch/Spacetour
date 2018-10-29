import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainAccueilComponent } from './main-accueil/main-accueil.component';
import { Header1Component } from './header1/header1.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireMobileComponent } from './formulaire-mobile/formulaire-mobile.component';
import { DescriptifHotelComponent } from './descriptif-hotel/descriptif-hotel.component';
import { MapComponent } from './map/map.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { NasaService } from './nasa.service';
import { RecapComponent } from './recap/recap.component';
import { TopDestinationsComponent } from './top-destinations/top-destinations.component';
import { TriPlanetPipe } from './tri-planet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainAccueilComponent,
    Header1Component,
    FooterComponent,
    FormulaireMobileComponent,
    DescriptifHotelComponent,
    MapComponent,
    HotelListComponent,
    RecapComponent,
    TopDestinationsComponent,
    TriPlanetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path:"",
      component: MainAccueilComponent
      },
      {
        path:"descriptifhotel",
        component: DescriptifHotelComponent
      },
      {
      path: "formulaire",
      component: FormulaireMobileComponent
      },
      {
        path: "list",
        component: HotelListComponent
      },
      {
        path: "map",
        component: MapComponent
      },
      {
        path: "recap",
        component: RecapComponent
      },
      {
        path: "topdestinations",
        component: TopDestinationsComponent
      }
    ], { useHash: true })
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
