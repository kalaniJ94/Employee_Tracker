const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
},
console.log("Successfully connected to the database")
);

module.exports = connection;