
'use strict';

var $ = require('jquery');
var Board = require('./board-model.js');
var View = require('./view.js');
var EventController = require('./event-controller.js')

module.exports = {
  init: function (){
    var controller = new EventController();
    var gameBoard = new Board();
    var view = new View();

    view.initDom(gameBoard.boardMap);
    
    //Hook up EventController in modules
    view.addListener(controller.listener.bind(controller));
    gameBoard.addListener(controller.listener.bind(controller));
    
    // Register events and handlers
    controller.addEventHandlers({
      'done'    : gameBoard.checkBoard.bind(gameBoard),
      'result'  : view.showResult.bind(view)  
    }); 
  }
};


$(function(){
  module.exports.init();
});


