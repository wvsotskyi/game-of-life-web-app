import * as fs from 'node:fs';
import * as http from 'node:http';
import connect from "connect";


http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.openSync('./index.html');
    let page = fs.readFileSync('./index.html');
    response.end(page);
}).listen(process.env.PORT);