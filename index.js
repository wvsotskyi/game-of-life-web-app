import * {http} from "http";

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`html`);
}).listen(process.env.PORT);