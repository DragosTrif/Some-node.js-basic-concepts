'use strict';

function greet(callback) {
  console.log('hello!');
  var data = {
    name : 'Dragos Trif'
  }
  callback(data);
}

greet(
  function(data) {
    console.log('The callback executed!');
    console.log(data);
  }
);


greet(
  function(data) {
    console.log('A different executed!');
    console.log(data.name);
  }
);