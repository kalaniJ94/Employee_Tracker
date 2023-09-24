const express = require('express');
const mysql = require('mysql2');
const navigate = require('../Employee_Tracker/js/index');
// const validate = require('../Employee_Tracker/js/validate');
const functions = require('../Employee_Tracker/js/index');

// const PORT = process.env.PORT || 3306;
// const app = express();

navigate();

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
