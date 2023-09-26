const { prompt } = require('inquirer');
const mysql = require('mysql2')
require('dotenv').config();
const cTable = require('console.table');
const connection = require('./db');
// const validate = require('validate');
function navigate() {
    prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Select an option to navigate the database: ',
            choices: [
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'Update Employee Role',
                'Add Role',
                'Add Department',
                'Exit'
            ]
        },
    ])
        .then((answers) => {
            const { choices } = answers;
            console.log(choices);
            if (choices === 'View All Employees') {
                console.log("VAE");
                viewEmployees()
                }
            
            else if (choices === 'View All Roles') {
                console.log("VAR");
                viewAllRoles();
            }
            else if (choices === 'View All Departments') {
                console.log("VAD");
                viewAllDepartments();
            }
            else if (choices === 'Update Employee Role'){
                console.log("UER")
                updateEmployeeRole();
            }
            else if (choices === 'Add Role'){
                console.log("AR")
                addRole();
            }
            else if(choices === 'Add Department'){
                console.log("AD")
                addDepartment();
            }
            else if (choices === 'Exit') {
                connection.end();
            }
        }
    )};
  

function viewEmployees(){
    db.viewEmployees()
    .then(([rows])=> {
        let employee = rows;
        console.log("VE")
        console.table(employee);
    })
    .then(() => navigate())
};
function viewAllRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows
            console.log("VAR")
            console.table(roles);
        })
        .then(() => navigate())
};
function viewAllDepartments(){
    db.viewAllDepartments()
    .then(([rows]) => {
        let;  
    })
    .then(() => navigate())
};
function updateEmployeeRole(){
    db.updateEmployeeRole()
    .then(([rows]) => {
    let;
})
.then(() => navigate())
};
function addRole(){
    db.addRole()
    .then(([rows]) => {
        let;
    })
    .then(() => navigate())
};
function addDepartment(){
    db.addDepartment()
    .then (([rows]) => {
        let;
    })
    .then(() => navigate())
};



navigate();