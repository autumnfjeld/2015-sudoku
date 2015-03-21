
function BoardGen(){
  this.board;

}

BoardGen.prototype.init = function (){
  this.makeBoard();
}

BoardGen.prototype.makeBoard = function (){
  this.board = _.range(_.range(0));
  console.log('Board made', this.board);
};

BoardGen.prototype.seedBoard = function(){
  for (var i = 1; i <=9; i++){
    var row = randomNum();
    var col = randomNum();
    // var val  = randomNum();
    this.Board[row][col] = i;
  }
};

BoardGen.prototype.addClues = function(){
    var row = randomNum();
    var col = randomNum();
    var val = randomNum();
};

BoardGen.prototype.solve = function(){
  for (row = 0; row <=9; row++ ){
    for (col = 0; col <=9; col++ ){

  }
};

BoardGen.prototype.rowConflict = function(){
};

BoardGen.prototype.colConflict = function(){

}

BoardGen.prototype.boxConflict = function(){

}
//Helpers

// return a random number between and including 1 to 9
function randomNum(){
  return Math.random() * (9 - 1) + 1;
}

//test s
var go = new BoardGen();
go.init()