let fondofinal;
let estrellaFrames = [];
let estadoCred = "entrando";
let tEstado = 0;
let velFlot = 0.05;

let lineas = [
  ["COMISIÓN 3", 127, -1, 0],
  ["MARÍA DEL MAR ROSSI", 190, -1, 400],
  ["LEGAJO 124988/2", 220, -1, 600],
  ["FRANCISCO YÁÑEZ", 281, 1, 900],
  ["LEGAJO 125705/8", 312, 1, 1100]
];

function cargarCreditos() {
  fondofinal = loadImage("data/final.png");
  for (let i = 0; i < 8; i++) {                                  //para dibujar las imagenes de las estrellas sin copiar una por una
    estrellaFrames[i] = loadImage("data/estrella" + i + ".png");
  }
}

function iniciarCreditos() {
  estadoCred = "entrando";
  tEstado = millis();
}

// que imagen muestra de las estrellas
function cuadroActual(total, velocidad) {
  return floor(frameCount / velocidad) % total;
}

//de 0 a 1 lento
function progreso(retraso) {
  let p = constrain((millis() - tEstado - retraso) / 1000, 0, 1);
  return 1 - pow(1 - p, 3);
}

// dibuja la animación de las strellas
function animarestrellas(frames, x, y, tam, velocidad) {
  imageMode(CENTER);
  image(frames[cuadroActual(frames.length, velocidad)], x, y, tam, tam);
  imageMode(CORNER);
}

//dibuja las línea de los textos
function dibujartexto(txt, x, y) {
  fill(235, 176, 104);
  textSize(36);
  textAlign(CENTER, CENTER);
  text(txt, x, y);
}



function mBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}



// dibuja el boton
function Boton(txt, x, y, w, h) {
  noStroke();
  if (mBoton(x, y, w, h)) {
    fill(100, 60, 30);
  } else {
    fill(74, 44, 23);
  }
  rect(x, y, w, h, 30);
  fill(241, 237, 218);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(txt, x + w / 2, y + h / 2);
}



function creditos() {
  image(fondofinal, 0, 0, 800, 450);

  // que cuadro de las estrellas muestra
  animarestrellas(estrellaFrames, 700, 70, 120, 6);
  animarestrellas(estrellaFrames, 100, 380, 90, 9);

  // entra el texto
  for (let i = 0; i < lineas.length; i++) {
    let txt = lineas[i][0];
    let y = lineas[i][1];
    let lado = lineas[i][2];
    let retraso = lineas[i][3];
    let x = 400;

    if (estadoCred === "entrando") {
      x = lerp(400 + lado * 700, 400, progreso(retraso));
    } else if (estadoCred === "flotando") {
      y = y + sin(frameCount * velFlot + i) * 4;
    } else if (estadoCred === "saliendo") {
      x = lerp(400, 400 - lado * 700, progreso(retraso));
    }
    dibujartexto(txt, x, y);
  }

  Boton("Reiniciar", 300, 365, 200, 50);


  // sale y vuelve a entrar
  let t = millis() - tEstado;
  if (estadoCred === "entrando" && t > 2500) {
    estadoCred = "flotando";
    tEstado = millis();
  } else if (estadoCred === "flotando" && t > 5000) {
    estadoCred = "saliendo";
    tEstado = millis();
  } else if (estadoCred === "saliendo" && t > 2500) {
    estadoCred = "entrando";
    tEstado = millis();
  }
}
