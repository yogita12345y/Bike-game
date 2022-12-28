var database;
var form,
  game,
  player,
  playerCount,
  bgimg;
var gameState = 0;

var allplayers;

var bike1,
  bike2,
  bike3,
  bike4,
  bikes = [];

function preload() {
  bgimg = loadImage("images/background1.png");
  bike1img = loadImage("images/bike1.png");
  bike2img = loadImage("images/bike2.png");
  bike3img = loadImage("images/bike3.png");
  bike4img = loadImage("images/bike4.png");
  trackimg = loadImage("images/track.png");
  endbg=loadImage("images/leaderboard1.png")
  blastImg=loadImage("images/blast.png")
}


function setup() {
  database = firebase.database();
  canvas = createCanvas(950, 470);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }
  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
  }
  if(gameState==2){
    clear()
    background(endbg)
    game.gameover()
    

  }
}

