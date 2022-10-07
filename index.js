import * as fs from 'node:fs';
import * as http from 'node:http';
import * as path from 'node:path';

import express from "express";

const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 3338;

app.use('/', express.static(path.join(__dirname, 'html')));

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));


// fs.readFile('./index.html', function(err, html) {

//     if (err) throw err;

//     http.createServer(function(request, response) {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.write(html);
//         response.end();
//     }).listen(process.env.PORT);
// });