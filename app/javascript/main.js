
'use strict';

var $ = require('jquery');
var View = require('./view.js');
var EventController = require('./event-controller.js')
var BoardModel = require('./board-generator.js')

module.exports = {
  init: function (){
    var controller = new EventController();
    var board = new BoardModel();
    var view = new View();

    // board.init();
    view.initDom(board.wikiBoard);
    
    //Hook up EventController in modules
    view.addListener(controller.listener.bind(controller));
    board.addListener(controller.listener.bind(controller));
    
    // Register events and handlers
    controller.addEventHandlers({
      'done'    : board.checkSolution.bind(board),
      'result'  : view.showResult.bind(view)
      // 'reset'   : todo
    }); 


  }
};


$(function(){
  module.exports.init();
});


