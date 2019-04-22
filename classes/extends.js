'use strict';

var EventEmitter = require('events');
var util = require('util');

module.exports = class Greeter extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello world';
  }

  greet(data) {
    console.log(`${this.greeting} ${data}`);
    this.emit('greet', data);
  }
}


