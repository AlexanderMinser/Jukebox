// index.js for express to use

const http = require('http')
const fs = require('fs')
const express = require('express')
const path = require('path');

const app = express()

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
    res.sendFile('public/index.html');
    var myText = req.query.mytext;
    console.log('there was a request for ${}myText')
 });
 

app.listen(3000, () => console.log('Example app listening on port 3000!'))
