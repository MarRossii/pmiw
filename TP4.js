//TP1
//Maria del mar Rossi
//legajo: 124988/2
//comisión: 3



let imagen=[];
let robot=[];
let telon=[];
let imagenactual=0;
let estadotelon=0;
let contadortelon=0;
let estado=0;
let tiempo=0;
let velocidad=10;

function preload() {
  robot[0]= loadImage("data/robot1.png");
  robot[1]= loadImage("data/robot2.png");
  robot[2]= loadImage("data/robot3.png");
  robot[3]= loadImage("data/robot4.png");

  telon[0]= loadImage("data/telon1.png");
  telon[1]= loadImage("data/telon2.png");
  telon[2]= loadImage("data/telon3.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  if (estado==0) {

    image(telon[0], 0, 0, 800, 600);


    //telon abriendose
  } else if (estado==1) {
    image(telon[estadotelon], 0, 0, 800, 600);

    if (frameCount >=70) {
      estadotelon++;
      contadortelon=0;

      if (estadotelon>=telon.length) {
        estadotelon=2;
        estado=2;
        imagenactual=0;
      }
    }
  }

  //robot
  else if (estado==2) {
    image(robot[imagenactual], 0, 0, 800, 600);

    if (frameCount % velocidad==0) {
      imagenactual++;

      if (imagenactual>=robot.length) {
        imagenactual=0;
      }
    }
  }

  //telon cerrado
  else if (estado==3) {
    image(telon[estadotelon], 0, 0, 800, 600);
    if (frameCount >=70);
    {
      estadotelon--;
      contadortelon=0;

      if (estadotelon<=0) {
        estadotelon=0;
        estado=0;
      }
    }
  }hac
}
function mousePressed() {
  if (estado==0) {
    estado=1;
    estadotelon=0;
  } else if (estado==1) {
  } else if (estado==2) {
    estado=3;
    estadotelon=2;
  } else if (estado==3) {
  }
}
