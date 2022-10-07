import * as http from 'node:http';

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end(`hello world\n`)
}).listen(process.env.PORT)