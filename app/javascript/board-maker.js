var _ = require('underscore');
module.exports = BoardMaker;

var wikiBoard = [[5,3,0, 0,7,0, 0,0,0],
                 [6,0,0, 1,9,5, 0,0,0],
                 [0,9,8, 0,0,0, 0,6,0],
                 [8,0,0, 0,6,0, 0,0,3],
                 [4,0,0, 8,0,3, 0,0,1],
                 [7,0,0, 0,2,0, 0,0,6],
                 [0,6,0, 0,0,0, 2,8,0],
                 [0,0,0, 4,1,9, 0,0,5],
                 [0,0,0, 0,8,0, 0,7,9]
               ];

function BoardMaker(){
    this.board = wikiBoard;
    this.boardMap = makeMap(wikiBoard);
    this.reset;
    this.boardMap;
};

BoardMaker.prototype.makeBoard = function (){
  this.board = _.range(_.range(0));
  console.log('Board made', this.board);
  //todo: board generator
};

BoardMaker.prototype.checkBoard = function(cell, value){
  console.log('in' , this, ' update');
  // this.boardMap[cell] = value;
};

//provides easy access to coordinates and DOM iteration
function makeMap (valueMatrix) {
  var boardMap = {}, value, boxnum, cell = 0;
  for(var row = 1; row < 10; row ++){
    for ( var col = 1; col < 10 ; col++){
      boxnum = box(row,cell);
      value = valueMatrix[row-1][col-1] ? valueMatrix[row-1][col-1] : null;
      // console.log('vm', valueMatrix[row-1][col-1]  )
      boardMap[cell] = {'row' : row, 'col': col, 'box': boxnum, 'value': value};
      cell++;
    }
  }
  // console.log('boardMap made', boardMap);
  // console.log('a cell', boardMap[3]);
  return boardMap;
};



//Helper functions
function box(row, col){
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

