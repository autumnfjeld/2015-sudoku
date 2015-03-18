var _ = require('underscore');
module.exports = BoardMaker;


var wikiBoard = [[5,3,0,0,7,0,0,0,0],
                 [6,0,0,1,9,5,0,0,0],
                 [0,9,8,0,0,0,0,6,0],
                 [8,0,0,0,6,0,0,0,3],
                 [4,0,0,8,0,3,0,0,1],
                 [7,0,0,0,2,0,0,0,6],
                 [0,6,0,0,0,0,2,8,0],
                 [0,0,0,4,1,9,0,0,5],
                 [0,0,0,0,8,0,0,7,9]
               ];

function BoardMaker(){

    this.board = wikiBoard;
    this.clearBoard;
    this.resetBoard;

};

BoardMaker.prototype.makeBoard = function (){
  this.board = _.range(_.range(0));
  console.log('Board made', this.board);
};


