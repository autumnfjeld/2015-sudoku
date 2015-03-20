var $ = require('jquery');

module.exports = View;

function View(){
  this.boardValues = [];
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
}



/* ToDo's
* check for 1-9 numeric characters
* visual feedback of success/failure, pulsing colors!!!
* cell by cell checking for erros
*/


