var canvas, backgroundImage;
var enemy;
var enemyGroup;
var car, car1, car2;
var track, car1_img, car2_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  ground = loadImage("../images/track.jpg");
  enemy_img = loadImage("images/car2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 
  car = createSprite(500,500);
  car.addImage(car1_img);
 // car.y = 7950;

  enemyGroup = new Group();
}


function draw(){
  background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  // camera.position.x = car.x;
  camera.position.y = car.y;

  if(car.y!=-2440){
  
  if(keyIsDown(UP_ARROW)){
    car.y=car.y-14;
   }
 
   if(keyIsDown(RIGHT_ARROW)){
     car.x=car.x+20;
    }
 
    if(keyIsDown(LEFT_ARROW)){
     car.x=car.x-20;
    }
  }

  
   console.log(car.y)
  
  spawnEnemys();
  drawSprites();
}


function spawnEnemys(){
if (frameCount % 10 === 0) {
  var enemy = createSprite(500,500);
  //enemy.y = Math.round(random(0,10));
  enemy.x = Math.round(random(100,1000));

  

  enemy.velocityY = -10;
  enemy.addImage(enemy_img);
  
   //assign lifetime to the variable
   //enemy.lifetime = 200;
  
  //add each cloud to the group
  enemyGroup.add(enemy);
}
}
