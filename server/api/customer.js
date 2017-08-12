var route = require('express').Router();

route.use('/list', function(req, res) {
    var list = [
        { text: 'info 1 ' },
        { text: 'info 2 ' },
        { text: 'info 3 ' },
        { text: 'info 4 ' },
    ];
    res.send(list);
});

module.exports = route;