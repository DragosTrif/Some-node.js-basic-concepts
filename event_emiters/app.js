var Emitter     = require('events');
var eventConfig = require('./config').events;
var emtr        = new Emitter();

emtr.on(eventConfig.GREET, function () {
  console.log('Some one said hello!');
});

emtr.on(eventConfig.GREET, function () {
  console.log('Hello D!');
});

console.log('Aici');
emtr.emit(eventConfig.GREET);