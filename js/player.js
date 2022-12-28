class Player {
  constructor() {
    this.name = null;
    this.index = 0;
    this.distance = 0;
    this.positionX = 0;
    this.positionY = 600;
    this.rank = 0;
    this.rotation=0
    this.blast=false
   }

  getCount() {
    var playerCountref = database.ref("playerCount");
    playerCountref.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }


  addPlayer() {
    var playerIndex = "players/player" + this.index;
    

    if (this.index === 1) {
      this.positionX = width / 2 - 250;
    } else if (this.index === 2) {
      this.positionX = width / 2 - 100;
    } else if (this.index === 3) {
      this.positionX = width / 2 + 100;
    } else if (this.index === 4) {
      this.positionX = width / 2 + 250;
    }
  
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance,
      rotation:this.rotation,
      blast:this.blast
    });
}

//Create a Static function to get all player's information

  static getPlayersInfo() {
    var playerinforef = database.ref("players");
    playerinforef.on("value", data => {
      allplayers = data.val();
    
    });
  }
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance,
      rotation:this.rotation,
      blast:this.blast
    });
  }
  getBikesAtEnd(){
    database.ref("bikesAtEnd").on("value",x=>{
      this.rank=x.val()
    })
  }
  updateBikesAtEnd(x){
    database.ref("/").update({
      bikesAtEnd:x
    })
  }
}
