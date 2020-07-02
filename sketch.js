var database;
var form,game,player,playerCount;
var gameState = 0 ;
var allPlayers;
var  car1, car2, car3, car4,cars;
var car1Img,car2Img,car3Img,car4Img,track;

function preload() {
  car1Img = loadImage('images/car1.png');
  car2Img = loadImage('images/car2.png');
  car3Img = loadImage('images/car3.png');
  car4Img = loadImage('images/car4.png');
  track = loadImage('images/track.jpg');
}

function setup(){
  database = firebase.database();

  createCanvas(displayWidth-30,displayHeight-200);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
 
  if (playerCount===4) {
      game.updateState(1);
  }

  if (gameState===1) {
    game.play();
}

}

