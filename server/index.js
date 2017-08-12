var bodyParser = require('body-parser');
var express = require('express');
var route = require('./route');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);

var server = app.listen(5000, () => {
    console.log('Example app listening on port ', server.address().port);
});