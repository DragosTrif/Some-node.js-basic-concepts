var obj = {
  name  : 'Jhon Doe',
  greet : function() {
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
// call overides 'this'
obj.greet.call({name : 'Jane Doe'});
// apply overides 'this'
obj.greet.apply({name : 'Jane Doe'});