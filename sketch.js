var canvas, backgroundImage;
var enemy;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var enemyGroup;
var form, player, game;
var position;
var cars, car1, car2;

var track, car1_img, car2_img;

function preload(){
  track = loadImage("../images/track.jpg");
  background_img = loadImage("../images/Bg.png");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/1.png");
  ground = loadImage("../images/ground.png");
  enemy_img = loadImage("images/car2.png");
}

function setup(){
  canvas = createCanvas(displayWidth + 30, displayHeight + 70);
  background(background_img);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  enemyGroup = new Group();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  spawnEnemys();
}


function spawnEnemys(){
if (frameCount % 60 === 0) {
  var enemy = createSprite(800,-displayHeight,40,10);
  //enemy.y = Math.round(random(0,10));
  enemy.x = Math.round(random(300,800));
  enemy.y = Math.round(random(100,-displayHeight-1200));

  enemy.velocityY = -2;
  enemy.addImage(enemy_img);
  
   //assign lifetime to the variable
   //enemy.lifetime = 200;
  
  //add each cloud to the group
  enemyGroup.add(enemy);
}
}
