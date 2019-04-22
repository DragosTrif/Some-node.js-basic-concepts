var person = {
  firstname : 'Dragos',
  lastname  : 'Trif',
  greet     : function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
  },
};

person.greet();
console.log(person['firstname']);