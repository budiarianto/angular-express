var body_parser = require('body-parser');
var compression = require('compression');
var express = require('express');
var path = require('path');
var app = express();

app.disable("x-powered-by");
app.use(body_parser.json);
app.use(compression());
app.use(body_parser.urlencoded({ extended: true }));

require('./route').route(app);

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var server = app.listen(5000, function() {
    console.log('Example app listening on port ', server.address().port)
});