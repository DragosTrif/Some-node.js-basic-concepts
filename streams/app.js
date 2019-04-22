'use strict';

var fs = require('fs');

var readable = fs.createReadStream('./greet.txt',
  {encoding:'utf8', highWaterMark:32*1024});
var writable = fs.createWriteStream('./greetcopy.txt');

readable.on('data', (chunk) => {
  console.log(chunk.length);
  writable.write(chunk);
});


