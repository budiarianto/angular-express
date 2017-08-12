module.exports.connections = {
    ikiwae: {
        host: 'localhost',
        user: process.env.DB_ENV_MYSQL_USER,
        password: process.env.DB_ENV_MYSQL_PASSWORD,
        database: 'express_angular',
        multipleStatements: true,
        acquiretimeout: 1000000
    },
};