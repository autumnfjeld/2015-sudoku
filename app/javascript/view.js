var $ = require('jquery');

module.exports = View;

var solution = [ 5,3,4, 6,7,8, 9,1,2,   
                 6,7,2, 1,9,5, 3,4,8,
                 1,9,8, 3,4,2, 5,6,7,
                 8,5,9, 7,6,1, 0,0,3,
                 4,2,0, 8,0,3, 0,0,1,
                 7,1,0, 0,2,0, 0,0,6,
                 9,6,0, 0,0,0, 2,8,0,
                 2,8,0, 4,1,9, 0,0,5,
                 3,4,0, 0,8,0, 0,7,9
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
  console.log('collecting board values');
  var self = this;
  var matrix = [[]];
  var counter;
  var row = 0;
  $('.cell').each(function(i){
      // self.boardValues[i] = $(this).val();
      counter = i + 1; 
      col = i - row*9;
      // console.log('mod', counter % 9);
      // console.log('settin row', row, 'col', col, $(this).val());
      matrix[row][col] = $(this).val();
      if (counter % 9 === 0 && i < 80)  {
        row++;
        matrix[row] = [];
      }
  });
  console.log('matrix in dom', matrix)
  // this.emit('done', this.boardValues);
  this.emit('done', matrix);
};

View.prototype.showResult = function(result){
  //add visual notification
  // var resultText;
  // if (result === 'win') resultText = 'Woo Hoo. You rock!';
  $('.result').empty();
  $('.result').append('<h2>'+ result + '</h2>');
  console.log('will show result', result);
  setTimeout(function(){
    $('.result').empty();
  },5000);
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


