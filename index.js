import * as fs from 'node:fs';
import * as http from 'node:http';
import * as path from 'node:path';

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`html`);
}).listen(process.env.PORT);