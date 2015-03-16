// var $ = require('jquery');
module.exports = function($){
  
  // return function (){
    console.log('setboard', $);
    var values = [5, 3, null, 6, null, null, null, 9, 8];
    var boxPosition = []
    $('.box1').each(function(i){
      $(this).val(values[i]);
    });
  // }

};


