(function() {
    var conn = require('./connections');
    var app = {};

    app.conn = function() {
        var constring = conn.connections.ikiwae;
        return require('mysql').createConnection(constring);
    };

    app.query = function() {
        var conn = app.conn();
        conn.connect();
        if (arguments.length == 2) conn.query(arguments[0], arguments[1]);
        if (arguments.length == 3) conn.query(arguments[0], arguments[1], arguments[2]);
        conn.end();
    };

    app.trans = function(queries, callback) {
        var conn = app.conn();

        conn.beginTransaction(function(err) {
            if (err) {
                callback(err);
            } else {
                async.eachSeries(queries, function(item, cb) {
                    conn.query(item[0], item[1], cb);
                }, function(e) {
                    if (e) {
                        conn.rollback();
                        conn.end();
                    } else {
                        conn.commit(function() {
                            conn.end();
                        });
                    }
                    callback(e);
                });
            }
        });
    };

    module.exports = app;
}());