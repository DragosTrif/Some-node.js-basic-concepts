'use strict';

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname  = lastname;
  }

  greet() {
    console.log('Hello' + ' ' + this.firstname + ' ' + this.lastname);
  }
}

var Dragos = new Person('Dragos', 'Trif');
console.log(Dragos.firstname);
Dragos.greet();

var Diana = new Person('Diana', 'Trif');
Diana.greet();

console.log(Dragos.__proto__);
console.log(Diana.__proto__); 