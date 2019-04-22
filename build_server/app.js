'use strict';

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Contet-type': 'text/plain'});
  res.end('Hello word\n');
}).listen(1337, '127.0.0.1');

 