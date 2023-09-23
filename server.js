const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3306;
const app = express();

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});