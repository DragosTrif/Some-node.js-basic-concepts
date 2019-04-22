'use strict';

var Greeter = require('./extends');


var greeter1 = new Greeter();

greeter1.on('greet', (data) => {
  console.log('Dragos greeted: ' +  data);
});

greeter1.greet('in node js');