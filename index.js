import * as fs from 'node:fs';
import * as http from 'node:http';
import express from "express";
import * as path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));
const PORT = process.env.PORT || 8080;
var app = express();

console.log(__dirname);

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style.css'));
});

app.get('/code.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/code.js'));
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})