var util = require('util');

function Person() {
  this.first_name = 'Jhon';
  this.last_name = 'Node';
}

Person.prototype.greet = function() {
  console.log(`Helle ${this.first_name} ${this.last_name}`);
}

function Policeman() {
  Person.call(this);
  this.badgenumber = '123';
}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();