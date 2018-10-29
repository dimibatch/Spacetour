import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public affiJupiter() {

    document.getElementById("descriptifJupiter").style.display = "block";
    
  }

  public stopJupiter() {
    document.getElementById("descriptifJupiter").style.display = "none";
    
    
    
  }


public affiMercure() {
  document.getElementById("descriptifMercure").style.display = "block";
}
public stopMercure() {
    document.getElementById("descriptifMercure").style.display = "none";
    
    
    
}

  public affiNeptune() {
  document.getElementById("descriptifNeptune").style.display = "block";
  }
  public stopNeptune() {
    document.getElementById("descriptifNeptune").style.display = "none";

    
    
  }

  public affiSaturne() {
  document.getElementById("descriptifSaturne").style.display = "block";
  }
  public stopSaturne() {
    document.getElementById("descriptifSaturne").style.display = "none";

    
    
  }


  public affiVenus() {
  document.getElementById("descriptifVenus").style.display = "block";
  }
  public stopVenus() {
    document.getElementById("descriptifVenus").style.display = "none";

    
    
  }   


public affiMars() {
  document.getElementById("descriptifMars").style.display = "block";
}
 public stopMars() {
    document.getElementById("descriptifMars").style.display = "none";
        
}  


public affiTerre() {
  document.getElementById("descriptifTerre").style.display = "block";
}



public stopTerre() {
    document.getElementById("descriptifTerre").style.display = "none";   
    
}

public affiMoon() {
  document.getElementById("descriptifMoon").style.display = "block";
}
public stopMoon() {
    document.getElementById("descriptifMoon").style.display = "none";
        
} 

public affiMercury() {
  document.getElementById("descriptifMercury").style.display = "block";
}
public stopMercury() {
    document.getElementById("descriptifMercury").style.display = "none";
        
} 

}
