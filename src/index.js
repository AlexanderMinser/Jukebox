// index.js for express to use

const http = require('http')
const fs = require('fs')
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
    extended: false
 }));
 app.use(bodyParser.json());


app.get('/', function(req, res){
    res.sendFile('public/index.html');
 });

 app.post('/',function(req,res){
    if (req.body.hasOwnProperty('button1')) {
        const myText = req.query.mytext;
        res.send('there was a request for '+myText);
    }
    console.log(req.headers.origin)
 })
 

app.listen(3000, () => console.log('Example app listening on port 3000!'))
