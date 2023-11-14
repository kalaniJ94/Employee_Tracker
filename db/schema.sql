-- DROP DATABASE IF EXISTS employees_db;

-- CREATE DATABASE employees_db;

-- USE employees_db;

-- CREATE TABLE department(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE role (
-- id INT NOT NULL PRIMARY KEY,
-- title VARCHAR(30),
-- salary DECIMAL(8,2),
-- department_id INT,
-- FOREIGN KEY(department_id)
-- REFERENCES department(id)
-- ON DELETE SET NULL
-- );

-- CREATE TABLE employeeList(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     role_id INT,
--     manager_id INT,
--     FOREIGN KEY (role_id)
--     REFERENCES role(id)
--     ON DELETE SET NULL,
--     FOREIGN KEY (manager_id)
--     REFERENCES employeeList(id)
-- )
DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
    -- FOREIGN KEY(role_id)
    -- REFERENCES role(id),
    FOREIGN KEY(manager_id)
    REFERENCES employee(id)

);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Ned", "Stark", 1, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Jon", "Snow", 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Tywin", "Lannister", 4, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Tyrion", "Lannister", 3, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Danaereys", "Targaryen", 5, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Stannis", "Baratheon", 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Robert", "Baratheon", 3, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Night", "King", 1, 1 );
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Theon", "Greyjoy", 1, 1);


CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  PRIMARY KEY (id)
  -- FOREIGN KEY(department_id)
  -- REFERENCES department(id)
);
insert into role(title, salary, department_id) values('Manager', 5000000, 1);
insert into role(title, salary, department_id) values('Engineer', 1000000, 2);
insert into role(title, salary, department_id) values('Accountant', 4000000, 3);
insert into role(title, salary, department_id) values('Designer', 3000000, 4);
insert into role(title, salary, department_id) values('Administration', 2000000, 5);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
insert into department(name)
values ('Management'),
       ('Engineering'),
       ('Accounting'),
       ('Marketing'),
       ('Human Resources');