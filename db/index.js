const connection = require('./connection')
const inquirer = require('inquirer');
const validate = require('../js/validate');
class DB{
    constructor(connection){
        this.connection = connection;
    }
    viewEmployees(){
        return this.connection.promise().query('SELECT employeeList.id, employeeList.first_name, employeeList.last_name,  role.title, department.name AS department, role.salary FROM employeeList, role, department WHERE department.id = role.department_id AND role.id = employeeList.role_id ORDER BY employeeList.id ASC')
    }
    findAllRoles(){
        return this.connection.promise().query(`SELECT role.id, role.title, department.name AS department
        FROM role
        INNER JOIN department ON role.department_id = department.id`)
    }
    viewAllDepartments(){
        return this.connection.promise().query( `SELECT * FROM department`)
        
    }
    updateEmployeeRole(){ connection.promise().query(sql, (error, response) => {
        if (error) throw error;
        let employeeNamesArray = [];
        response.forEach((employee) => { employeeNamesArray.push(`${employee.first_name} ${employee.last_name}`); });

        let sql = `SELECT role.id, role.title FROM role`;
        connection.promise().query(sql, (error, response) => {
            if (error) throw error;
            let rolesArray = [];
            response.forEach((role) => { rolesArray.push(role.title); });

            inquirer
                .prompt([
                    {
                        name: 'chosenEmployee',
                        type: 'list',
                        message: 'Which employee has a new role?',
                        choices: employeeNamesArray
                    },
                    {
                        name: 'chosenRole',
                        type: 'list',
                        message: 'What is their new role?',
                        choices: rolesArray
                    }
                ])
                .then((answer) => {
                    let newTitleId, employeeId;

                    response.forEach((role) => {
                        if (answer.chosenRole === role.title) {
                            newTitleId = role.id;
                        }
                    });
                    response.forEach((employee) => {
                        if (
                            answer.chosenEmployee ===
                            `${employee.first_name} ${employee.last_name}`
                        ) {
                            employeeId = employee.id;
                        }
                    });

                    let sqls = `UPDATE employee SET employee.role_id = ? WHERE employee.id = ?`;
                    connection.query(
                        sqls,
                        [newTitleId, employeeId],
                        (error) => {
                            if (error) throw error;
                            navigate();
                        }
                    );
                });
        });
    });
        return this.connection.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.id AS "role_id"
        FROM employee, role, department WHERE department.id = role.department_id AND role.id = employee.role_id`)
        
    }
    addRole(){
        const sql = 'SELECT * FROM department'
        connection.promise().query(sql, (error, response) => {
            if (error) throw error;
            let deptNamesArray = [];
            response.forEach((department) => { deptNamesArray.push(department.name); });
            deptNamesArray.push('Create Department');
            inquirer
                .prompt([
                    {
                        name: 'departmentName',
                        type: 'list',
                        message: 'Which department is this new role in?',
                        choices: deptNamesArray
                    }
                ])
                .then((answer) => {
                    if (answer.departmentName === 'Create Department') {
                        this.addDepartment();
                    } else {
                        addRoleResume(answer);
                    }
                });
    
            const addRoleResume = (departmentData) => {
                inquirer
                    .prompt([
                        {
                            name: 'newRole',
                            type: 'input',
                            message: 'What is the name of your new role?',
                            validate: validate.validateString
                        },
                        {
                            name: 'salary',
                            type: 'input',
                            message: 'What is the salary of this new role?',
                            validate: validate.validateSalary
                        }
                    ])
                    .then((answer) => {
                        let createdRole = answer.newRole;
                        let departmentId;
    
                        response.forEach((department) => {
                            if (departmentData.departmentName === department.department_name) { departmentId = department.id; }
                        });
    
                        let sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
                        let crit = [createdRole, answer.salary, departmentId];
    
                        connection.promise().query(sql, crit, (error) => {
                            if (error) throw error;
                            viewAllRoles();
                        });
                    });
            };
        });
        return this.connection.promise().query("SELECT * FROM department")
    }
    addDepartment(){
        inquirer
        .prompt([
            {
                name: 'newDepartment',
                type: 'input',
                message: 'What is the name of your new Department?',
                validate: validate.validateString
            }
        ])
        .then((answer) => {
            let sql = `INSERT INTO department (department_name) VALUES (?)`;
            connection.query(sql, answer.newDepartment, (error, response) => {
                if (error) throw error;
                viewAllDepartments();
            });
        })
    }
}
  module.exports = new DB(connection);
