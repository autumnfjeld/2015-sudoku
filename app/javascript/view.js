var $ = require('jquery');

module.exports = View;

var solution = [ 5,3,4, 6,7,8, 9,1,2,   
                 6,7,2, 1,9,5, 3,4,8,
                 1,9,8, 3,4,2, 5,6,7,
                 8,5,9, 7,6,1, 0,0,3,
                 4,0,0, 8,0,3, 0,0,1,
                 7,0,0, 0,2,0, 0,0,6,
                 9,6,0, 0,0,0, 2,8,0,
                 2,0,0, 4,1,9, 0,0,5,
                 3,0,0, 0,8,0, 0,7,9
               ];

function View(){
  this.boardValues = [];
  this.testBoard = solution;
}

View.prototype.addListener = function(func){
  this.emit = func;
  console.log('added emitter', this.emit);
}

View.prototype.initDom = function(board){
  console.log('in loadDom');
  var boundGetValues = this.getValues;
  var self = this;

  //jQuery loops thru cells in row by row, traversing left to right
   $('.cell').each(function(i){
      //Initalize dom with sudoku values
      $(this).val(board[i].value);
      //$(this).val(i);     //use this to get a visual of the array assignment
  });

   //Add event Handler to done button
   $('.btn-done').click(self.getValues.bind(self));

   //Add event handler to test button
   $('.btn-test').click(function(){
    self.test();
    });
};

View.prototype.resetBoard = function(){
  //todo
}

View.prototype.getValues = function(){
  var self = this;
  $('.cell').each(function(i){
      self.boardValues[i] = $(this).val();
  });
  this.emit('done', this.boardValues);
};

View.prototype.showResult = function(result){
  console.log('will show result', result);
};

View.prototype.test = function(){
  $('.cell').each(function(i){
    $(this).val(solution[i]);
  });
  this.emit('done', this.boardValues);
};


/* ToDo's
* check for 1-9 numeric characters
* visual feedback of success/failure, pulsing colors!!!
* cell by cell checking for erros
*/


