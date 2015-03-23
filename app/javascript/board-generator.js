var _ = require('underscore');
module.exports = BoardGen;

var solution = [ 5,3,4, 6,7,8, 9,1,2,   
                 6,7,2, 1,9,5, 3,4,8,
                 1,9,8, 3,4,2, 5,6,7,
                 8,5,9, 7,6,1, 4,2,3,
                 4,2,6, 8,5,3, 7,9,1,
                 7,1,3, 9,2,4, 8,5,6,
                 9,6,1, 5,3,7, 2,8,4,
                 2,8,7, 4,1,9, 6,3,5,
                 3,4,5, 2,8,6, 1,7,9
               ];
var solutionMatrix = [ [5,3,4, 6,7,8, 9,1,2],   
                       [6,7,2, 1,9,5, 3,4,8],
                       [1,9,8, 3,4,2, 5,6,7],
                       [8,5,9, 7,6,1, 4,2,3],
                       [4,2,6, 8,5,3, 7,9,1],
                       [7,1,3, 9,2,4, 8,5,6],
                       [9,6,1, 5,3,7, 2,8,4],
                       [2,8,7, 4,1,9, 6,3,5],
                       [3,4,5, 2,8,6, 1,7,9]
                     ];               

function arrayToMatrix(array){
  var matrix = [[]];

}

function BoardGen(){
  // this.board = [['hi']];
  this.testArray = solution;
  // this.board = solution;
  this.sudokuArray = [];
}

BoardGen.prototype.init = function (){
  console.log('init', this.board[0][0]);
  //optimize: combine following functions
  this.makeBoard();
  this.seedBoard();
  this.addClues();
  this.matrixToArray();
};

BoardGen.prototype.makeBoard = function (){
  // this.board = _.range(_.range(0));  
  console.log('this.board', this.board[0][0]);
  for (row = 0; row <9; row++ ){
    this.board[row]=[];
    for (col = 0; col <9; col++ ){
      this.board[row][col] = 0;
    }
  }
  console.log('Board matrix made ', this.board);
};

BoardGen.prototype.seedBoard = function(){
  console.log(this.board);
  for (var i = 1; i <=9; i++){
    var row = randomNum('matrix');
    var col = randomNum('matrix');
    console.log('row', row, 'col',col);
    console.log(col, this.board[row][col]);
    // var val  = randomNum();
    this.board[row][col] = i;
  }
  console.log('seeded', this.board);
};

//want a total of 27 clues 
BoardGen.prototype.addClues = function(){
  for (var i = 18; i > 0; i--  ){
    var row = randomNum('matrix');
    var col = randomNum('matrix');
    var val = randomNum('game');
    
    if (this.board[row][col] === 0) {
      this.board[row][col] = val;
    } else {
      i++;
    } 
  }
};

//make data suitable for jQuery each on dom table
BoardGen.prototype.matrixToArray = function(matrix){
  var domArray = [];
    for (row = 0; row <9; row++ ){
      for (col = 0; col <9; col++ ){
        console.log('in matrixToArray row:',this.board[row]);
        this.sudokuArray.push(this.board[row][col])
    }
  }
  console.log('length of array 81?', this.sudokuArray.length);
};

BoardGen.prototype.solve = function(){
  for (row = 0; row <=9; row++ ){
    for (col = 0; col <=9; col++ ){
    }
  }
};

// BoardGen.prototype.checkSolution = function(){
//   this.rowConflict();
//   this.colConflict();
//   this.boxConflict():
// };

BoardGen.prototype.checkConflicts = function(){
  this.board = solutionMatrix;
  var rowChecker = {};
  var boxChecker = {};  // { boxnum : {}}
  var boxNumber;
  var cellValue;
  var cellCounter = 1;
  for (var row = 0; row <9; row++) {
    checker = {};
    for (var col = 0; col <9; col++) {
      cellValue = this.board[row][col];
      rowChecker[cellValue ] = 1;
      // console.log('check row', row, rowChecker);
      //do box checking
      boxNumber = box(row, col);
      // console.log('row',row, 'col', col, 'box', boxNumber);
      // console.log('check box 1', boxChecker[1]);
      if(!boxChecker.hasOwnProperty(boxNumber)) boxChecker[boxNumber] = {};
      boxChecker[boxNumber][cellValue] = 1;

      console.log()
    }
    //check that a row contains 1 thru 9
    if (_.size(rowChecker) < 9) {
      console.log('conflict in row', row);
      i = 100;  //abort abort
    }
    
    //check that a box contains 1 thru 9
    if( (row+1) % 3 === 0 ){  // there is a complete box to check
      for (var boxNum in boxChecker) {
        console.log('boxChecker, row', row, boxChecker);
        if(_.size(boxChecker[boxNum]) < 9 ) {
          console.log('conflict in box', boxNum, 'abort', boxChecker[boxNum]);
          // break;
        }
      }
      boxChecker = {};
    }
  }
};
var boxcalledcounter = 0;
function box(row, col){
  // boxcalledcounter++;
  // console.log('box called',boxcalledcounter);
  row = row+1;
  col = col+1;
  if (row < 4 && col < 4) return 1;
  if (col < 4) {
    if( row > 3 && row < 7 )  return 4
    if( row > 6 )             return 7
  }
  if ( col >3 && col < 7 ) {
    if (row < 4 )             return 2
    if( row > 3 && row < 7 )  return 5
    if( row > 6 )             return 8
  }
  if ( col > 6 ) {
    if (row < 4 )             return 3
    if( row > 3 && row < 7 )  return 6
    if( row > 6 )             return 9
  }
}


BoardGen.prototype.colConflict = function(){
  var checker;
  var col;
  for (var col = 0; col < 10; col++ ){ //col iterator
    checker = {};
    col = i;
    for (var j = 0; j < 81; j+=9){
      // console.log('cell by col', i+j, cellValues[i+j]);
      checker[cellValues[i+j]] = 1;
    }
    if (_.size(checker) < 9) {
      console.log('col', col, 'LOSER');
      i=100;
    }
  }  
};

// BoardGen.prototype.boxConflict = function(){
//   var checker = {};
//   for (var col = 0; col < 8; i++ ){

//   }

// };

//Helpers
function randomNum(whatFor){
  if (whatFor === 'matrix') return Math.floor(Math.random()*9);
  if (whatFor === 'game') return Math.floor(Math.random()*(10-1) + 1);
}



