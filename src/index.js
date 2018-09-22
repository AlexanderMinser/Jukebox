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


app.get('/api', function(req, res){
    console.log('get req made');
    res.contentType('application/json');
    res.json({foo: "bar"});
});

app.get('/api/music_dir', function(req, res) {
    console.log('music req made');
    fs.readdir(__dirname, function(err, items) {
        console.log(__dirname);
        res.send(items);
    });
});

app.post('/api',function(req,res){
    console.log('post req made')
    res.sendFile(path.resolve('../jukebox/public/index.html'));
    req.body = JSON.parse(JSON.stringify(req.body));
});

/*
app.use(function(req, res, next) {
    console.log('use req made');
    res.status(404);
    res.send('404: File Not Found');
    
})*/


app.listen(8000, () => console.log('Example app listening on port 8000!'))

module.exports = app;
