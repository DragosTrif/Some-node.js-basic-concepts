'use strict';

var http = require('http');
var fs   = require('fs');


http.createServer(function(req, res) {
  res.writeHead(200, {'Contet-type': 'text/html'});
  var html = fs.readFileSync('./index.html', 'utf8');
  html = html.replace('{message}', 'and Dragos');
  res.end(html);
}).listen(1337, '127.0.0.1');

 