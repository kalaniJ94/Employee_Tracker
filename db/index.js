const inquirer = require('inquirer');


const navigate = () => {
    inquirer.prompt([
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
            'Update Employee Roles',
            'Update Employee Manager',
            'Add Employee',
            'Remove Employee',
            'Remove Role',
            'Remove Department',
            'Exit'
        ]
}])
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View All Employees'){
            viewAllEmployees();
        }
        if (choices === 'View All Roles'){
            viewAllRoles();
        }
        if (choices === 'View All Departments'){
            viewAllDepartments();
        }
        if (choices === 'View Employees by Department'){
            viewEmployeesByDepartment();
        }
        if (choices === 'View Department Budget'){
            viewDepartmentBudget();
        }
        if (choices === 'Update Employee Roles'){
            updateEmployeeRoles();
        }
        if (choices === 'Update Employee Manager'){
            updateEmployeeRoles();
        }
        if (choices === 'Add Employee'){
            addEmployee();
        }
        if (choices === 'View All Employees'){
            viewAllEmployees();
        }
        if (choices === 'Remove Employee'){
            removeEmployee();
        }
        if (choices === 'Remove Role'){
            removeRole();
        }
        if (choices === 'Remove Department'){
            removeDepartment();
        }
        if (choices === 'Exit'){
            connection.end();
        }
    });
};
