// backend node js stuff
// Alexander Minser

var http = require('http')
var fs = require('fs')


fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
