#RefCode- C42-Tablet

Example of for-in loop

const object = { a: 1, b: 2, c: 3 };

for (var property in object) {
  console.log(property +" : "+object[property]);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

//Similarly

allplayers = {player1:"information", player2:" information",
              player3:"information", player4:" information"}

for(var p in allplayers){
  console.log(p + " : "+allplayers[p])
}
// expected output:
// "player1: information"
// "player2: information"
// "player3: information"
// "player4: information"




