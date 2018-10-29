

function readBurger() {
        if (document.getElementById('collapseExample').style.marginLeft!='-30px') {
            console.log("ca marche");
            document.getElementById('collapseExample').style.marginLeft='-30px'; 
        }
        else {  
            document.getElementById('collapseExample').style.marginLeft='-900px';  
        }
    }  
      
 function blurEffect() {
      if (document.getElementsByClassName('to-blur')[0].style.filter!='blur(7px)') {
          document.getElementsByClassName('to-blur')[0].style.filter='blur(7px)';
          document.getElementsByClassName('to-blur')[1].style.filter='blur(7px)';    
      }
      else {
          document.getElementsByClassName('to-blur')[0].style.filter='blur(0px)';
          document.getElementsByClassName('to-blur')[1].style.filter='blur(0px)';   
      }
    } 

function clickDetails() {
    if (document.getElementsByClassName('single-button1')[0].style.backgroundColor!='chocolate') {
        
        document.getElementsByClassName('single-button1')[0].style.backgroundColor='chocolate';
        document.getElementsByClassName('single-button2')[0].style.backgroundColor='#f2f3f4';
        document.getElementsByClassName('single-button1')[0].style.color='#f2f3f4';
        document.getElementsByClassName('single-button2')[0].style.color='black';
        
        document.getElementsByClassName('single-button1')[0].style.height='100';
        
        document.getElementsByClassName('flip-body1')[0].style.display='block';
        document.getElementsByClassName('flip-body2')[0].style.display='none';

    }
}
    
function clickReviews() {
    if (document.getElementsByClassName('single-button2')[0].style.backgroundColor!='chocolate') {
        
        document.getElementsByClassName('single-button2')[0].style.backgroundColor='chocolate';
        document.getElementsByClassName('single-button1')[0].style.backgroundColor='#f2f3f4';
        document.getElementsByClassName('single-button2')[0].style.color='#f2f3f4';
        document.getElementsByClassName('single-button1')[0].style.color='black'; 
        
        document.getElementsByClassName('flip-body2')[0].style.display='block';
        document.getElementsByClassName('flip-body1')[0].style.display='none';
    }
}

function scrollTop(){
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



function affiJupiter() {

    document.getElementById("descriptifJupiter").style.display = "block";
    
}

function stopJupiter() {
    document.getElementById("descriptifJupiter").style.display = "none";
    
    
    
}


function affiMercure() {
  document.getElementById("descriptifMercure").style.display = "block";
}
function stopMercure() {
    document.getElementById("descriptifMercure").style.display = "none";
    
    
    
}

function affiNeptune() {
  document.getElementById("descriptifNeptune").style.display = "block";
}
function stopNeptune() {
    document.getElementById("descriptifNeptune").style.display = "none";
    
    
    
}

function affiSaturne() {
  document.getElementById("descriptifSaturne").style.display = "block";
}
function stopSaturne() {
    document.getElementById("descriptifSaturne").style.display = "none";
    
    
    
}


function affiVenus() {
  document.getElementById("descriptifVenus").style.display = "block";
}
 function stopVenus() {
    document.getElementById("descriptifVenus").style.display = "none";
    
    
    
}   


function affiMars() {
  document.getElementById("descriptifMars").style.display = "block";
}
 function stopMars() {
    document.getElementById("descriptifMars").style.display = "none";
        
}  


function affiTerre() {
  document.getElementById("descriptifTerre").style.display = "block";
}



function stopTerre() {
    document.getElementById("descriptifTerre").style.display = "none";   
    
}

function affiMoon() {
  document.getElementById("descriptifMoon").style.display = "block";
}
function stopMoon() {
    document.getElementById("descriptifMoon").style.display = "none";
        
} 

function affiMercury() {
  document.getElementById("descriptifMercury").style.display = "block";
}
function stopMercury() {
    document.getElementById("descriptifMercury").style.display = "none";
        
} 


