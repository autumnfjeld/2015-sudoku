var $ = require('jquery');
module.exports = function(){
  console.log('in loadDom');
  //Use instance of game to populate dom nodes
  //loops thru cells in each row left to right, then next row
   $('.cell').each(function(i){
      console.log(i);
      $(this).val(i);
    });

   $('h1').css({'color':'blue'});

};
