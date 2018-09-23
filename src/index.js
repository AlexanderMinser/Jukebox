// index.js for express to use

const fs = require('fs')
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()
const lame = require('lame');
const speaker = require('speaker');


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
    res.contentType('application/json');
    fs.readdir('/media/alex/OS/Users/Alex/Music', function(err, items) {
        const filtered = items.filter((item) => item.substr(-3) == 'mp3');
        res.json({songList: filtered});
    });
});

app.post('/api/play_song', function(req, res) {
    console.log('song sent: '+req.body.name);
    /*const song = 
    fs.createReadStream(song)
    .pipe(new lame.Decoder())
    .on('format', function (format) {
        this.pipe(new Speaker(format));
    });*/
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
