(function() {
    var app = require('express').Router();
    var db = require('../config/db');
    var moment = require('moment');

    app.use('/list', (req, res) => {
        var query = 'select kode_area, nama_area from area where kategori_area=?';
        var param = ['prov'];
        db.query(query, param, (err, rows) => {
            req.session['value'] = moment().format('YYYY-MM-DD HH:mm:ss');
            res.send(rows);
        });
    });

    app.post('/store1', (req, res) => {
        req.session['store1'] = req.body.value;
        res.send({ success: true, nilai: '1', hasil: req.body.value || 'kosong' });
    });

    app.post('/store2', (req, res) => {
        req.session['store2'] = req.body.value;
        res.send({ success: true, nilai: '2', hasil: req.body.value || 'kosong' });
    });

    app.use('/', (req, res) => {
        var value = {
            value: req.session['value'],
            store1: req.session['store1'],
            store2: req.session['store2'],
        };
        console.log(value);
        res.send(value);
    });

    module.exports = app;
}());