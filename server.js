var http = require('http');

var server = http.createServer(function(req, res, next) {
  res.end("Hello, world");
});

server.listen(80, function() {
  console.log("Server started");
});
