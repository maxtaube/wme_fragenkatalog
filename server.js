// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var path = require('path');

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );


// DO NOT CHANGE!
// bind server to port
var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});