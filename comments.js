// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. 
// When you access the web server, you should see the comments.html file.

// Use the fs module to read the comments.html file and serve it as the response.

// The comments.html file is located in the same directory as comments.js.

var http = require('http');
var fs = require('fs');

// Create a web server
var server = http.createServer(function (request, response) {
    // Read and serve the comments.html file
    fs.readFile('comments.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
});

// Listen on port 3000
server.listen(3000);
console.log('Server is listening on port 3000');