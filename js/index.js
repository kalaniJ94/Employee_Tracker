const inquirer = require('inquirer');
// const connection = require('../db/connection');
const functions = require('./functions');
const validate = require('../js/validate');



async function navigate(){
   await inquirer
    .prompt([
        {
        name: 'choice',
        type: 'list',
        message: 'Select an option to navigate the database: ',
        choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'View Employees by Department',
            'View Department Budget',
            'Update Employee Role',
            'Update Employee Manager',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Remove Employee',
            'Remove Role',
            'Remove Department',
            'Exit'
        ]
},
])
    .then((response) => {
        const {choices} = response;

        if (choices === 'View All Employees'){
            console.log("VAE");
            functions().viewAllEmployees();
        }
        if (choices === 'View All Roles'){
            console.log("VAR");
            functions().viewAllRoles();
        }
        if (choices === 'View All Departments'){
            console.log("VAD");
            viewAllDepartments();
        }
        if (choices === 'View Employees by Department'){
            console.log("VEBD");
            viewEmployeesByDepartment();
        }
        if (choices === 'View Department Budget'){
            console.log("VDB");
            viewDepartmentBudget();
        }
        if (choices === 'Update Employee Role'){
            console.log("UER");
            updateEmployeeRoles();
        }
        if (choices === 'Update Employee Manager'){
            console.log("UEM");
            updateEmployeeRoles();
        }
        if (choices === 'Add Employee'){
            console.log("AE");
            addEmployee();
        }
        if (choices === 'Add Role'){
            console.log("AR");
            addRole();
        }
        if (choices === 'Add Department'){
            console.log("AD");
            addDepartment();
        }
        if (choices === 'View All Employees'){
            console.log("VAE");
            viewAllEmployees();
        }
        if (choices === 'Remove Employee'){
            console.log("RE");
            removeEmployee();
        }
        if (choices === 'Remove Role'){
            console.log("RR");
            removeRole();
        }
        if (choices === 'Remove Department'){
            console.log("RD");
            removeDepartment();
        }
        if (choices === 'Exit'){
            connection.end();
        }
    },
  
    );
};

navigate();