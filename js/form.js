class Form {
  constructor() {
    this.greetings = createElement("h2");
    this.input = createInput("name");
    this.buttonImg = createImg("./images/start.png");
    this.finishtext=createElement("h1")
  }
  display() {
    this.input.position(380, 180);
    this.input.size(180, 30);
    this.buttonImg.position(width/2-70, height-50);
    this.buttonImg.size(150, 50);

    this.buttonImg.mousePressed(() => {
      this.input.hide();
      this.buttonImg.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      console.log(player.index);
      player.addPlayer();
      player.updateCount(playerCount);
      this.greetings.html("Hello " + player.name);
      this.greetings.position(300, 180);
    });
  } 

  hide() {
    this.buttonImg.hide();
    this.input.hide();
    this.greetings.hide(); 
  }
  end(){
    var reset=createButton("Reset")
    reset.position(750,20)
    reset.mousePressed(()=>{
      player.updateBikesAtEnd(0)
      player.updateCount(0)
      game.update(0)
      database.ref("players").remove()
      this.finishtext.hide()
      window.location.reload()
    })
    this.finishtext.position(200,200)
    this.finishtext.html("Congratulations! "+player.name+" Your rank is "+player.rank)
  }
  
}

