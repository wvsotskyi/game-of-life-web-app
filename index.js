import * as fs from 'node:fs';
import * as http from 'node:http';
import express from "express";
import * as path from 'node:path';

var app = express();
app.use(express.static(__dirname + 'client'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
}).listen(process.env.PORT);


app.get('/client/code.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/code.js'));
}).listen(process.env.PORT);