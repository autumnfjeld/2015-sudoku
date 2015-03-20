var _ = require('underscore');
module.exports = BoardModel;

var wikiBoard = [ 5,3,0, 0,7,0, 0,0,0,
                  6,0,0, 1,9,5, 0,0,0,
                  0,9,8, 0,0,0, 0,6,0,
                  8,0,0, 0,6,0, 0,0,3,
                  4,0,0, 8,0,3, 0,0,1,
                  7,0,0, 0,2,0, 0,0,6,
                  0,6,0, 0,0,0, 2,8,0,
                  0,0,0, 4,1,9, 0,0,5,
                  0,0,0, 0,8,0, 0,7,9
               ];

function BoardModel(){
    this.board = wikiBoard;       //in absence of board generator
    this.reset ;
    this.boardMap;
};

BoardModel.prototype.addListener = function (func){
  this.emit = func;
}

BoardModel.prototype.makeBoard = function (){
  this.board = _.range(_.range(0));
  console.log('Board made', this.board);
  //todo: board generator
};

BoardModel.prototype.reset = function(){
  //would generate new game 
  this.board = wikiBoard;
  this.emit('reset');
}

BoardModel.prototype.checkBoard = function(cellValues){
  checkRows();
  checkColumns();
  checkBoxes();

  function checkRows(){
    var checker;
    var row = 1;
    for (var i = 0; i < 81; i+=9) {    //row iterator
      checker = {};
      for (var j = i; j < i+9; j++) {  //col iterator
        checker[cellValues[j]] = 1;
      }
      console.log(checker);
      if (_.size(checker) < 9) {
        console.log('row', row, 'LOSER');
        i=100;
      }
      row++;
    }
   }

  function checkColumns(){
    var checker;
    var col;
    for (var i = 0; i < 10; i++ ){ //col iterator
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
  }

  function checkBoxes(){
    console.log('Coming soon: box checking!')

  }
  //todo finish checking and send either win or lose
  this.emit('result', 'win');
};



//////////////   Helper functions ///////////////////////

//provides easy access to coordinates and DOM iteration
// function makeMap (valueMatrix) {
//   var boardMap = {}, value, boxnum, cell = 0;
//   for(var row = 1; row < 10; row ++){
//     for ( var col = 1; col < 10 ; col++){
//       boxnum = box(row,cell);
//       value = valueMatrix[row-1][col-1] ? valueMatrix[row-1][col-1] : null;
//       // console.log('vm', valueMatrix[row-1][col-1]  )
//       boardMap[cell] = {'row' : row, 'col': col, 'box': boxnum, 'value': value};
//       cell++;
//     }
//   }
//   return boardMap;
// };

// //Assign box number to each cell
// function box(row, col){
//   if (row < 4 && col < 4) return 1;
//   if (col < 4) {
//     if( row > 3 && row < 7 )  return 4
//     if( row > 6 )             return 7
//   }
//   if ( col >3 && col < 7 ) {
//     if (row < 4 )             return 2
//     if( row > 3 && row < 7 )  return 5
//     if( row > 6 )             return 8
//   }
//   if ( col > 6 ) {
//     if (row < 4 )             return 3
//     if( row > 3 && row < 7 )  return 6
//     if( row > 6 )             return 9
//   }
// }

