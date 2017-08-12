module.exports = app => {
    var conn = require('./config/connections');
    var session = require('express-session');
    var MySQLStore = require('express-mysql-session')(session);

    var sessionStore = new MySQLStore(conn.connections.ikiwae);

    app.use(session({
        key: 'session_cookie_name',
        secret: 'session_cookie_secret',
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }));

    app.get("/", (req, res) => { res.send('hello'); });
    app.use("/api/customer", require("./api/customer"));
    app.use("/api/area", require("./api/area"));
};