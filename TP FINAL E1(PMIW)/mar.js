
let mar1, mar2, mar3, mar4, mar5, mar6, mar7;

function imagenesM() {
  mar1 = loadImage("data/mar1.png"); //elegiste a mar
  mar2 = loadImage("data/mar2.png"); //cuenta sobre mar
  mar3 = loadImage("data/mar3.png"); //te da a elegir 2 opciones
  mar4 = loadImage("data/mar4.png");
  mar5 = loadImage("data/mar5.png");
  mar6 = loadImage("data/mar6.png");
  mar7 = loadImage("data/mar7.png");
}

function mar() {
  if (pantalla === 0) {
    image(imgInicio, 0, 0, 800, 450);
  } else if (pantalla === 1) {
    image(imgElegir, 0, 0, 800, 450);
  } else if (pantalla === 2) {
    image(mar1, 0, 0, 800, 450);
    //primer texto
    fill(209, 126, 201);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("ELEGISTE", 300, 200);
    text("A", 300, 250);
    text("MAR!!!", 300, 300);

    if (millis() - tiempo > 5000) {   // a los 5 segundos
      pantalla = 3;
      tiempo = millis(); // e
    }
  } else if (pantalla === 3) {
    image(mar2, 0, 0, 800, 450);
    //segundo texto
    fill(209, 126, 201);
    textSize(35);
    textAlign(CENTER, CENTER);
    text("MAR ES UNA CHICA QUE NECESITA", 400, 200);
    text("APROVECHAR SU DIA AL MAXIMO", 400, 250);

    if (millis() - tiempo > 10000) {   // a los 10 segundos
      pantalla = 4;
    }
  } else if (pantalla === 4) {
    image(mar3, 0, 0, 800, 450);
    //tercer texto 1
    fill(209, 126, 201);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("NORMALMENTE SE LEVANTA A LAS", 400, 100);
    text("6 DE LA MAÑANA PARA PODER", 400, 150);
    text("DESAYUNAR E IR A CURSAR", 400, 200);
    //tercer texto 2
    fill(232, 227, 176);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Se levanta", 200, 285);
    text("Duerme un rato mas", 600, 270);
    text("y va sin desayunar", 600, 300);
  } else if (pantalla === 5) {
    image(mar4, 0, 0, 800, 450);
    //cuarto texto 1
    fill(209, 126, 201);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("VUELVE DE CURSAR", 400, 100);
    text("CANSADA, PERO EL DIA", 400, 150);
    text("SIGUE!!!", 400, 200);
    //cuarto texto 2
    fill(232, 227, 176);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Se sienta a estudiar", 205, 310);
    text("Va al gimnasio", 590, 310);
  } else if (pantalla === 6) {
    image(mar5, 0, 0, 800, 450);
    //quinto texto 1
    fill(209, 126, 201);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("DESCANSA UN RATO, YA", 400, 100);
    text("FINALIZANDO EL DIA, QUE ES", 400, 150);
    text("LO PROXIMO QUE SIGUE?", 400, 200);
    //quinto texto 2
    fill(232, 227, 176);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Se junta con amigos", 205, 310);
    text("Merienda sola", 590, 310);
  } else if (pantalla === 7) {
    image(mar6, 0, 0, 800, 450);
    //sexto texto
    fill(209, 126, 201);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("EL DIA DE MAR", 400, 180);
    text("TERMINO TEMPRANO!!!", 400, 230);
  } else if (pantalla === 8) {
    image(mar7, 0, 0, 800, 450);
    //septimo texto
    fill(209, 126, 201);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("SE QUEDO HASTA TARDE", 400, 200);
    text("Y CENARON TODOS JUNTOS", 400, 250);
  }
}

function opcionesMar() {
  if (pantalla === 2) {
    pantalla = 3;
    tiempo = millis();
  } else if (pantalla === 3) {
    pantalla = 4;
  } else if (pantalla === 4) {
    // mar3 a mar4
    if (mouseX > 55 && mouseX < 355 && mouseY > 265 && mouseY < 365) {
      pantalla = 5;
    } else if (mouseX > 445 && mouseX < 745 && mouseY > 265 && mouseY < 365) {
      pantalla = 5;
    }
  } else if (pantalla === 5) {
    // mar4 a mar5
    if (mouseX > 55 && mouseX < 355 && mouseY > 265 && mouseY < 365) {
      pantalla = 6;
    } else if (mouseX > 445 && mouseX < 745 && mouseY > 265 && mouseY < 365) {
      pantalla = 6;
    }
    
    
  } else if (pantalla === 6) {
    // mar5: izquierda = mar7, derecha = mar6
    if (mouseX > 55 && mouseX < 355 && mouseY > 265 && mouseY < 365) {
      pantalla = 8;
    } else if (mouseX > 445 && mouseX < 745 && mouseY >265 && mouseY < 365) {
      pantalla = 7;
    }
    
    
    
  } else if (pantalla === 7) {
    pantalla = 21;      // mar6 = créditos
    iniciarCreditos(); 
  } else if (pantalla === 8) {
    pantalla = 21;      // mar7 = créditos
    iniciarCreditos(); 
  }
}
