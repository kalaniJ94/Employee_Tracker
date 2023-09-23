INSERT INTO department(name)
VALUES  ("Sales"),
        ("Legal"),
        ("Engineering"),
        ("IT"),
        ("Finance");

INSERT INTO role (id, title, salary, department_id) 
VALUES
        (001, "Lead Salesperson", 85000.00, 1),
        (002, "Salesperson", 60000.00, 1),
        (003, "Legal Team Lead", 95000.00, 2),
        (004, "Legal Team Member", 80000.00, 2),
        (005, "Engineering Lead", 95000.00, 3),
        (006, "Engineer", 80000.00, 3),
        (007, "IT Technician", 65000.00, 4),
        (008, "Finance Team Lead", 90000.00, 5),
        (009, "Finance Team Member", 80000.00, 5);

INSERT INTO employeeList (first_name, last_name, role_id, manager_id)
VALUES  ("Robert", "Baratheon", 001, NULL),
        ("Stannis", "Baratheon", 002, 1),
        ("Tywin", "Lannister", 003, NULL),
        ("Jamie", "Lannister", 004, 3),
        ("Cersei", "Lannister", 004, 3),
        ("Ned", "Stark", 005, NULL),
        ("Robb", "Stark", 006, 6),
        ("Arya", "Stark", 006, 6),
        ("Daenarerys", "Targaryen", 007, NULL),
        ("Balon", "Greyjoy", 008, NULL),
        ("Theon", "Greyjoy", 009, 10);
