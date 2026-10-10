let fran1, fran2, fran3, fran4, fran5, fran6, fran7;


function imagenesF() {
 
  fran1 = loadImage("data/fran1.png") // elegiste a Fran
  fran2 = loadImage("data/fran2.png") // descipcion breve sobre el
  fran3 = loadImage("data/fran3.png") // te da elegir 2 opciones
  fran4 = loadImage("data/fran4.png") // ""
  fran5 = loadImage("data/fran5.png") // ""
  fran6 = loadImage("data/fran6.png") // Final 1 de Fran
  fran7 = loadImage("data/fran7.png") // Final 2 de Fran
}




function fran() {
 
 
 
 
  if (pantalla === 0) {
    image(imgInicio, 0, 0, 800, 450);
  }
  else if (pantalla === 1) {
    image(imgElegir, 0, 0, 800, 450);
  }
  else if (pantalla === 8) {
    image(fran1, 0, 0, 800, 450);
   
   
    if (millis() - tiempo > 5000) {  
      pantalla = 9;
      tiempo = millis();              
    }
  } else if (pantalla === 9) {
    image(fran2, 0, 0, 800, 450);
   
    if (millis() - tiempo > 7000) {  
      pantalla = 10;
    }
   
     } else if (pantalla === 10) {
    image(fran3, 0, 0, 800, 450);
  } else if (pantalla === 11) {
    image(fran4, 0, 0, 800, 450);
  } else if (pantalla === 12) {
    image(fran5, 0, 0, 800, 450);
  } else if (pantalla === 15) {
    image(fran6, 0, 0, 800, 450);
   
    if (millis() - tiempo > 6000) {
      pantalla = 0
      yiempo = millis();
    }
   
  } else if (pantalla === 16) {
    image(fran7, 0, 0, 800, 450);
   
    if (millis() - tiempo > 6000) {
      pantalla = 17;
      tiempo = millis();
     
    }
  }
}

function opcionesFran () {
     
  if (pantalla === 1) {    
    if (mouseX > 110 && mouseX < 360 && mouseY > 250 && mouseY < 365) {
      pantalla = 8;
      tiempo = millis();
    }  
  }
   
  else if (pantalla === 8) {    
    pantalla = 9;
    tiempo = millis();    
  }
   
  else if (pantalla === 9) {    
    pantalla = 10;
    tiempo = millis();    
  }
 
  else if (pantalla === 10) {    
    if (mouseX > 50 && mouseX < 360 && mouseY > 250 && mouseY < 375) {
      pantalla = 11;
    }    
    if (mouseX > 440 && mouseX < 755 && mouseY > 250 && mouseY < 375) {
      pantalla = 11;
    }  
  }
 
  else if (pantalla === 11) {    
    if (mouseX > 50 && mouseX < 360 && mouseY > 250 && mouseY < 375) {
      pantalla = 12;
    }    
    if (mouseX > 440 && mouseX < 755 && mouseY > 250 && mouseY < 375) {
      pantalla = 12;
    }  
  }
 
  else if (pantalla === 12) {    
    //FINAL 1
    if (mouseX > 50 && mouseX < 360 && mouseY > 250 && mouseY < 375) {
      pantalla = 16;
      tiempo = millis();
    }
    //FINAL 2
    if (mouseX > 440 && mouseX < 755 && mouseY > 250 && mouseY < 375) {
      pantalla = 15;
      tiempo = millis();
    }
   
  } else if (pantalla === 15) {
    pantalla = 0;
    tiempo = millis();
   
  } else if (pantalla === 16) {
    pantalla = 0;
    tiempo = millis();
  }
}
