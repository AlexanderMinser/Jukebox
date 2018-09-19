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
    console.log('get req made');
    res.send('.../jukebox/public/index.html');
 });

 app.post('/',function(req,res){
    console.log('post req made')
    res.sendFile(path.resolve('../jukebox/public/index.html'));
    req.body = JSON.parse(JSON.stringify(req.body));
    if (req.body.hasOwnProperty('button1')) {
        /*
        fs.readdir('C:/FirmwareVerification', function(err, items) {
            console.log(items);
            res.send(items);
        });*/
    }
 })
 
 app.use(function(req, res, next) {
    res.sendFile(path.resolve('.../jukebox/public/index.html'));
    console.log('use req made');
    res.status(404);
    res.send('404: File Not Found');
 })


app.listen(8000, () => console.log('Example app listening on port 8000!'))
