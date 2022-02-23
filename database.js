const mysql = require("mysql2")

var dbpool = mysql.createPool({
    connectionLimit: 1000,
    host: 'remotemysql.com',
    user: 'mNVs04i7Jh',
    password: 'Nrt9IWcOAq',
    database: 'mNVs04i7Jh',
    port: '3306'
})

module.exports = dbpool