var fs = require ('fs');
var htmlfile = "index.html";

var express = require('../node_modules/express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var html =fs.readFileSync(htmlfile).toString(); 
 response.send(html);
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
