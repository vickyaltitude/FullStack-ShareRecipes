require('dotenv').config();

const mysql2 = require('mysql2');
const pool = mysql2.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_password,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST
})

module.exports = pool.promise();