var EventEmitter = require('events');
var util = require('util');

function Greeter() {
  EventEmitter.call(this);
  this.greeting = 'Hello world';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

var greeter1 = new Greeter();

greeter1.on('greet', (data) => {
  console.log('Dragos greeted: ' +  data);
});

greeter1.greet('in node js');