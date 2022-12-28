class Game {
  constructor() {
    this.leftKeyActive = false;
    this.blast = false;
  }
 
  getState() {
    var gameStateref = database.ref("gameState");
    gameStateref.on("value", function(data) {
      gameState = data.val();
    });
  }
 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount();

    bike1 = createSprite(100, 200);
    bike2 = createSprite(250, 200);
    bike3 = createSprite(400, 200);
    bike4 = createSprite(550, 200);
 
    bike1.addImage(bike1img);
    bike2.addImage(bike2img);
    bike3.addImage(bike3img);
    bike4.addImage(bike4img);

    bike1.addImage("blast",blastImg)
    bike2.addImage("blast",blastImg)
    bike3.addImage("blast",blastImg)
    bike4.addImage("blast",blastImg)
    
    bike1.scale = 0.1;
    bike2.scale = 0.1;
    bike3.scale = 0.1;
    bike4.scale = 0.1;
  
    bike1.setCollider("circle",0,0,150)
    bike2.setCollider("circle",0,0,150)
    bike3.setCollider("circle",0,0,150)
    bike4.setCollider("circle",0,0,150)

    bikes = [bike1, bike2, bike3, bike4];
  
  } 

  play() {
    form.hide();
    Player.getPlayersInfo();
    player.getBikesAtEnd()

    if (allplayers !== undefined) {
      
      background("#263238");
      image(trackimg, 0, -height * 4, width, height * 5);

      var index = 0; 
      var x=215
      var y;
      for (var p in allplayers) {
        index = index + 1;
        x = allplayers[p].positionX;
        y = allplayers[p].positionY-400;
        bikes[index - 1].x = x;
        bikes[index - 1].y = y;
        if(allplayers[p].blast==true){
          bikes[index-1].changeImage("blast")
          bikes[index-1].scale=0.3
        }
        if(keyIsDown(UP_ARROW)&&!player.blast){
          bikes[index-1].rotation=allplayers[p].rotation
        }
        if(keyIsDown(LEFT_ARROW)&&!player.blast){
          bikes[index-1].rotation=allplayers[p].rotation
        }
        if(keyIsDown(RIGHT_ARROW)&&!player.blast){
          bikes[index-1].rotation=allplayers[p].rotation
        }
        
        if(index==player.index){
          fill ("red")
          ellipse(x,y,60,60)
          camera.position.x=width/2
          camera.position.y=bikes[index-1].y  
        }
        this.handleBikeCollision(player.index)
    }
    if(keyIsDown(UP_ARROW)&&!player.blast){
      player.positionY-=10
      player.distance+=10
      player.rotation=0
      player.update()
    }
    if(keyIsDown(LEFT_ARROW)&&!player.blast){
      player.positionX-=5
      player.rotation=-25
      player.update()
    }
    if(keyIsDown(RIGHT_ARROW)&&!player.blast){
      player.positionX+=5
      player.rotation=25
      player.update()
    }
    if(player.distance>2050){
      gameState=2
      player.rank+=1
      player.updateBikesAtEnd(player.rank)
      player.update()
      
    }

    drawSprites();
  }
}
gameover(){
 form.end()
}
handleBikeCollision(index){
  if(index-1==0){
    if(
      bikes[index-1].collide(bikes[1])||
      bikes[index-1].collide(bikes[2])||
      bikes[index-1].collide(bikes[3])
    ){
      player.blast=true
      player.update()
    }
  }
  if(index-1==1){
    if(
      bikes[index-1].collide(bikes[0])||
      bikes[index-1].collide(bikes[2])||
      bikes[index-1].collide(bikes[3])
    ){
      player.blast=true
      player.update()
    }
  }
  if(index-1==2){
    if(
      bikes[index-1].collide(bikes[1])||
      bikes[index-1].collide(bikes[0])||
      bikes[index-1].collide(bikes[3])
    ){
      player.blast=true
      player.update()
    }
  }
  if(index-1==3){
    if(
      bikes[index-1].collide(bikes[1])||
      bikes[index-1].collide(bikes[2])||
      bikes[index-1].collide(bikes[0])
    ){
      player.blast=true
      player.update()
    }
  }
}
}
























