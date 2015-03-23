var $ = require('jquery');

module.exports = View;

var solution = [ 5,3,4, 6,7,8, 9,1,2,   
                 6,7,2, 1,9,5, 3,4,8,
                 1,9,8, 3,4,2, 5,6,7,
                 8,5,9, 7,6,1, 4,2,3,
                 4,2,6, 8,5,3, 7,9,0,
                 7,1,3, 9,2,4, 8,5,6,
                 9,6,1, 5,3,7, 2,8,4,
                 2,8,7, 4,1,9, 6,3,5,
                 0,4,5, 2,8,6, 1,7,9
               ];

function View(){
  this.boardValues = [[]];
  this.testBoard = solution;
}

View.prototype.addListener = function(func){
  this.emit = func;
  console.log('added emitter', this.emit);
}

View.prototype.initDom = function(board){
  var boundGetValues = this.getValues;
  var self = this;
  //jQuery loops thru cells in row by row, traversing left to right
   $('.cell').each(function(i){
      //Initalize dom with sudoku values, don't add zeros
      if (board[i] !== 0) $(this).val(board[i]);
      // $(this).val(i+1);     //use this to get a visual of the array assignment
  });

   //Add event Handler to done button
   $('.btn-done').click(self.getValues.bind(self));

   //Add event handler to reset button

   //Add event handler to test button
   $('.btn-test').click(function(){
    self.test();
    });
};

View.prototype.resetBoard = function(){
  //todo
}

View.prototype.getValues = function(){
  // console.log('collecting board values');
  boundBoardValues = this.boardValues;
  var counter;
  var row = 0;
  $('.cell').each(function(i){
      counter = i + 1; 
      col = i - row*9;
      boundBoardValues[row][col] = $(this).val();
      if (counter % 9 === 0 && i < 80)  {
        row++;
        boundBoardValues[row] = [];
      }
  });
  console.log('matrix in dom', boundBoardValues)
  // this.emit('done', this.boardValues);
  this.emit('done', boundBoardValues);
};

View.prototype.showResult = function(result){
  //Todo - no dom reflow
  $('.result').empty();
  $('.result').append('<h2>'+ result + '</h2>');
  console.log('will show result', result);
  setTimeout(function(){
    $('.result').empty();
  },5000);
};

View.prototype.test = function(){
  $('.cell').each(function(i){
    //need regex
    if (solution[i] !== 0) $(this).val(solution[i]);
  });
};


/* ToDo's
* check for 1-9 numeric characters
* visual feedback of success/failure, pulsing colors!!!
* cell by cell checking for erros
*/


