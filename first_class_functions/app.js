var a = 1;
var b = 2;

var c = a + b;

console.log(c);

function greet() {
  console.log('hi');
}

greet();

function log_greeting(fn) {
  fn();
}

// function are first-class 
// here we pass the function not the result
log_greeting(greet);

// function expresion

var greet_me = function() {
  console.log('Hi Tony');
}

greet_me();
// its first class
log_greeting(greet_me);

// on the fly
log_greeting( function(){
  console.log('HI Dragos');
});