//MARÍA DEL MAR ROSSI LEGAJO:124988/2
//https://youtu.be/NVbmjNFV7-E
//FRANCISCO YÁÑEZ LEGAJO:125705/8
//Comisión:3

let imgInicio, imgElegir;
let pantalla = 0;
let tiempo = 0;
let fuente;


function preload() {
  imgInicio = loadImage("data/inicio.png");
  imgElegir = loadImage("data/inicio2.png");
  fuente = loadFont ("data/fuentetitulo.ttf");
  imagenesM();
  imagenesF();
  cargarCreditos();
}



function setup() {
  createCanvas(800, 450);
  textFont(fuente);
}

function draw() {
  console.log(pantalla);
  background(241, 237, 218);

  if (pantalla === 0) {
    image(imgInicio, 0, 0, 800, 450);
    fill(250, 184, 78);
    textSize(60);
    textAlign(CENTER, CENTER);
    text("ELEGÍ TU DIA", 400, 225);
  } else if (pantalla === 1) {
    image(imgElegir, 0, 0, 800, 450);
    // texto principal
    fill(250, 184, 78);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("A QUIEN QUERES ELEGIR?", 400, 180);

    //texto para elegir
    fill(232, 227, 176);
    textSize(45);
    textAlign(CENTER, CENTER);
    text("Francisco                    Mar", 375, 305);
  } else if (pantalla >= 2 && pantalla <= 8) {
    mar();                   // dia de Mar
  } else if ((pantalla >= 9 && pantalla <= 12) || (pantalla >= 15 && pantalla <= 16)) {
    fran();                  //dia de Fran
  } else if (pantalla === 21) {
    creditos();
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);

  if (pantalla === 0) {
    pantalla = 1;
  } else if (pantalla === 1) {
    if (mouseX > 400 && mouseX < 690 && mouseY > 265 && mouseY < 360) {
      pantalla = 2;
      tiempo = millis();
    }
  } else if (pantalla >= 2 && pantalla <= 8) {
    opcionesMar();    // los clics del recorrido de Mar
  } else if ((pantalla >= 9 && pantalla <= 13) || (pantalla >= 15 && pantalla <= 16)) {
    opcionesFran(); // loa clics del recorrido de Francisco
  } else if (pantalla === 21) {                    // ← nuevo
    if (mBoton(300, 365, 200, 50)) {           // los mismos números que el botón
      pantalla = 0;
      tiempo = 0;
    }
  }
}
