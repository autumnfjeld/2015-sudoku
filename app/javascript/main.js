
'use strict';
// var $ = require('$uery-browserify');
var $ = require('jquery');
var setBoard = require('./set-board');

function start() {
  setBoard($);

  //Some simple tests 
  var glow = {
    'outline': 'none',
    'border-color': '#9ecaed',
    'box-shadow': '0 0 10px #9ecaed'
  };

  function checkBox(){
    $('.box1').css('outline', glow);
    console.log('checkingbox')

    var count = 0;
    $('.box1').each(function(index){
      var num;
      console.log($(this).val())
      num = $(this).val();
      count = num ? count + 1 : count;
      if (count === 9) console.log('Count is 9! Next check for unique 1 thru 9')
    });
    console.log('box1', count);
  }

  $('.box1').on('input', null, null, function(){
    checkBox();
  });
}

$(function() {
  start();
  // setBoard($);
});
