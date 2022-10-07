import * as fs from 'node:fs';
import * as http from 'node:http';

fs.readFile('./index.html', function(err, html) {

    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(process.env.PORT);
});