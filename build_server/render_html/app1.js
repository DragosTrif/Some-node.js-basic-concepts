'use strict';
// use streams
var http = require('http');
var fs   = require('fs');


http.createServer(function(req, res) {
  res.writeHead(200, {'Contet-type': 'text/html'});
  fs.createReadStream('./index.html').pipe(res);
}).listen(1337, '127.0.0.1');

 