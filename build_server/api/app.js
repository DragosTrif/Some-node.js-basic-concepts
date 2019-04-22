'use strict';

var http = require('http');
var fs   = require('fs');


http.createServer(function(req, res) {

  if (req.url === '/') {
    res.writeHead(200, {'Contet-type': 'text/html'});
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, {'Contet-type': 'application/json'});
    var obj = {
      name : 'John',
      lastname : 'Doe',
    };

    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end();
  }
  
}).listen(1337, '127.0.0.1');
