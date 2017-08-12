(function() {
    var app = require('express').Router();
    var db = require('../config/db');

    app.use('/list', (req, res) => {
        var query = 'select id, name, company from contact limit ?, ?';
        var param = [10, 25];
        db.query(query, param, (err, rows) => {
            console.log(req.session['value']);
            res.send(rows);
        });
    });


    module.exports = app;
}());