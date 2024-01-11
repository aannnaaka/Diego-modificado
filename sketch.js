var dino
var imagen
var miau
var mim 
var nol

function preload(){
  imagen = loadAnimation("trex1.png","trex2.png","trex3.png");
  mim = loadImage("ground2.png");
  //Precarga la imagen de la nube
 
  
}

function setup() {

  createCanvas(1000,300)
  
  //crear sprite de trex
  dino = createSprite(50,160,20,50);
  dino.addAnimation("running", imagen);
 
  
  //crear sprite de suelo
  miau = createSprite(200,250,400,20);
  miau.addImage("ground",mim);
  miau.x = miau.width /2;
  miau.velocityX = -4;
  
  //crear sprite de suelo invisible
  nol = createSprite(200,270,400,10);
  nol.visible = false;
  
  //generar números aleatorios
 

}

function draw() {
  //establecer color de fondo
  background(180);
  
 

  //hacer que el trex salte al presionar la barra espaciadora
  if(keyDown("space")&& dino.y >= 100) {
    dino.velocityY = -10;
  }
  
  dino.velocityY = dino.velocityY + 0.8
  
  if (miau.x < 0){
    miau.x = miau.width/2;
  }
  
  //evitar que el trex caiga
  dino.collide(nol);
  
 
  
  drawSprites();
}

