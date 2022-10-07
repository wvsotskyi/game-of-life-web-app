import * as http from 'node:http';
import * as fs from `node:fs`;


fs.readFile('/index.html', function(err, html) {
    if (err) {
        return http.createServer(function(request, response) {
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.end(`hello world`);
        }).listen(process.env.PORT);
    }
    return http.createServer(function(request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.end(html);
    }).listen(process.env.PORT);
});