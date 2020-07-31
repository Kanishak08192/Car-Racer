class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,300);
    car1.addImage("car1",car1_img);

    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);

    cars = [car1, car2];
  }

  play(){
    form.hide();
  
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(73,73,73);
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 1 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = allPlayers[plr].x;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x ;
        cars[index-1].y = y;
      
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

  

    if( player.index !== null){
      if(keyIsDown(LEFT_ARROW)){
          player.x -=10;
          player.update();
      }
      else if(keyIsDown(RIGHT_ARROW)){
          player.x +=10;
          player.update();
      }
      else if(keyIsDown(UP_ARROW)){
        player.update();
        player.distance +=10
      }
     
    if(player.distance > 3800){
      gameState = 2;
    }
   
    drawSprites();
  }

}
  end(){
    console.log("Game Ended");
  }


  

}
