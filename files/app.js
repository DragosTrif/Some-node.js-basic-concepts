'use strict';

var fs = require('fs');

var greet = fs.readFileSync('./greet.txt', 'utf8');

console.log(greet);
// read files async 
var greet2 = fs.readFile('./greet.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log('Done');
// console.log(greet2);