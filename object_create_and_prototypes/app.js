var person = {
  firstname : '',
  lastname  : '',
  greet     : function() {
    return('Hello' + ' ' + this.firstname + ' ' + this.lastname)
  },
};


var jhon = Object.create(person);

jhon.firstname = 'Jhon';
jhon.lastname  = 'Doe';

var jane = Object.create(person);

jane.firstname = 'Jane';
jane.lastname  = 'Doe';

console.log(jhon.greet());
console.log(jane.greet());
