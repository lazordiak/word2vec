let http = require('http');
let PORT = 8009;

let express = require('express');
let app = express();

let server = http.createServer(app).listen(PORT, function() {
  console.log("Server listening on port: " + PORT);
});

app.use(express.static('public'));
