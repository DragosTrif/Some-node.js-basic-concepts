function Greeter() {
  this.greeting = 'Hello Dragos';
  this.greet    = function() {
    console.log(this.greeting); 
  };
   
}

module.exports = new Greeter();