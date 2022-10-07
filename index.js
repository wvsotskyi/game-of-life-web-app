const http = require('http');
const cloud = require('cloud');

http.createServer(function(request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.end(`html`);
}).listen(process.env.PORT);