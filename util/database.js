const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '107.180.27.217',
    user: 'northwind',
    database: 'northwind',
    password: 'codeNinja15#'
});

module.exports = pool.promise();