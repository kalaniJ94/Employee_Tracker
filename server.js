const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

const db =mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    },
    console.log("successfully connected to employees_db")
)

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});