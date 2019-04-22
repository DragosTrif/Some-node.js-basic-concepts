'use strict';

var fs   = require('fs');
var zlib = require('zlib');

var readable    = fs.createReadStream('./greet.txt');
var writable    = fs.createWriteStream('./greetcopy.txt');
var commpressed = fs.createWriteStream('./greet.txt.gz');
var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(commpressed);
