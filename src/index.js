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
    req.body = JSON.parse(JSON.stringify(req.body));
    console.log(req.body);
    fs.readdir("C:/FirmwareVerification");
    if (req.body.hasOwnProperty('button1')) {
        console.log(req.query.mytext);
        const myText = req.query.mytext;
        res.send('there was a request for '+myText);
    }
    console.log(req.headers.origin)
 })
 


fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
}); 


app.listen(3000, () => console.log('Example app listening on port 3000!'))
