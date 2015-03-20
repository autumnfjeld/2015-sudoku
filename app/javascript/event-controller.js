module.exports = EventController;

function EventController(){
  this.eventHandlers = {};
};

EventController.prototype.listener = function(event, data){
  this.eventHandlers[event](data);
};

EventController.prototype.addEventHandlers = function(handlers){
  //expect object todo: add check
  for (var prop in handlers){
    this.eventHandlers[prop] = handlers[prop];
  }
  // console.log('loaded handlers', this.eventHandlers);
};


