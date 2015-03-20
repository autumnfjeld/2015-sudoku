module.exports = EventController;

function EventController(){
  this.hi = 'hiEV';
  console.log('started');
  this.eventHandlers = {};
};

EventController.prototype.listener = function(event, data){
  console.log('in event listener', this.hi, event);
  this.eventHandlers[event](data);
};

EventController.prototype.addEventHandlers = function(handlers){
  //expect object todo: add check
  for (var prop in handlers){
    this.eventHandlers[prop] = handlers[prop];
  }
  // console.log('loaded handlers', this.eventHandlers);
};


