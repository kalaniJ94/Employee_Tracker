INSERT INTO department(name)
VALUES  ("Sales"),
        ("Legal"),
        ("Engineering"),
        ("IT"),
        ("Finance");

INSERT INTO roles(id, title, salary, department_id) 
VALUES
        (001, "Lead Salesperson", 85000, 1)
        (002, "Salesperson", 60000, 1),
        (003, "Legal Team Lead", 95000, 2),
        (004, "Legal Team Member", 80000, 2),
        (005, "Engineering Lead", 95000, 3),
        (006, "Engineer", 80000, 3)
        (007, "IT Technician", 65000, 4),
        (008, "Finance Team Lead", 90000, 5),
        (009, "Finance Team Member", 80000, 5);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES  ("Robert", "Baratheon", 001),
        ("Stannis", "Baratheon", 002, 1),
        ("Tywin", "Lannister", 003),
        ("Jamie", "Lannister", 004, 3),
        ("Cersei", "Lannister", 004, 3),
        ("Ned", "Stark", 005),
        ("Robb", "Stark", 006, 6),
        ("Arya", "Stark" 006, 6),
        ("Daenarerys Targaryen", 007),
        ("Balon", "Greyjoy" 008),
        ("Theon", "Greyjoy", 009, 10);
