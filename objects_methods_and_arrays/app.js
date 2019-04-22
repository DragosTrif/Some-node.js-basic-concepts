// object properties and methods

var obj = {
  greet: 'Hello',
};

console.log(obj.greet);
console.log(obj['greet']);

// function and arrays

var arr = [];

arr.push( function() {
    console.log('Hello1');
  }
);

arr.push( function() {
    console.log('Hello2');
  }
);

arr.push( function() {
    console.log('Hello13');
  }
);

arr.forEach( function(item) {
  item();
});