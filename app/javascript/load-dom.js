var $ = require('jquery');

module.exports = Controller;

function Controller(){
  this.boardValues = [];
  this.events = {};
}

Controller.prototype.addEvents = function(name, func){
  this.events[name] = func;
  // console.log('event added', this.events[name]);
};

Controller.prototype.initDom = function(board){
  console.log('in loadDom');
  var boundEvents = this.events;
  var boundGetValues = this.getValues;
  var self = this;
  //Use instance of game to populate dom nodes
  //jQuery loops thru cells in row by row, traversing left to right
   $('.cell').each(function(i){
      //Initalize dom with sudoku values
      $(this).val(board[i].value);
      //$(this).val(i);  //use this to get a visual of the array assignment
      //add listener to dom node
      // var classList = $(this)[0].className;
      // $(this).change(function(stuff){
      //   console.log('You changed cell', stuff );
      //   emitter();
      // });
  });

   //Add event Handler to done button
   $('.btn-done').click(self.getValues.bind(self));

   // $('.btn-done').click(function() {
   //   boundEvents.checkBoard();
   //   // boundGetValues();
   //   self.getValues.bind(self);
   // });
}

Controller.prototype.getValues = function(){
  var self = this;
  $('.cell').each(function(i){
      self.boardValues[i] = $(this).val();
  });
  // console.log('got values', this.boardValues);
  this.events.checkBoard(this.boardValues);             //this should be separated into clearer event handling or emiter..
};

