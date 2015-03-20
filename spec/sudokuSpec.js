//will need jasmine-guery to do tests

describe("Player", function() {
  var $ = require('jquery');
  var Board = require('../app/javascript/board-model');
  var View = require('../app/javascript/view');
  var EventController = require('../app/javascript/event-controller.js')
  var board;
  var view;
  var controller;


  beforeEach(function() {
    controller = new EventController();
    gameBoard = new Board();
    view = new View();

    var init = function(){
      view.initDom(gameBoard.boardMap);
      
      //Hook up EventController in modules
      view.addListener(controller.listener.bind(controller));
      gameBoard.addListener(controller.listener.bind(controller));
      
      // Register events and handlers
      controller.addEventHandlers({
        'done'    : gameBoard.checkBoard.bind(gameBoard),
        'result'  : view.showResult.bind(view)  
      }); 
    };

    $(function(){
      init();
    });

  });

  it("should load values into dom", function() {
 
  });
});
