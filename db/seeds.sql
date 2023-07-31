INSERT INTO department(name)
VALUES 
('Management'),
('Sales'),
('Human Resources'),
('Social Media'),
('Office Staff'),
('Engineers'),
('Accounting');

INSERT INTO roles(title, salary, department_id)
VALUES
('CEO', 100000, 1),
('Sales Rep', 67000, 2),
('HR Rep', 72000, 4),
('Social Media Creator', 45000, 3),
('Receptionist', 47000, 5),
('Full Stack Dev', 150,000, 6);

INSERT INTO employee(first_name, last_name, role_id) 
VALUES
('Master', 'Roshi', 1),
('Android', '17', 5),
('Android', '18', 2),
('Goku', 'Son', 3),
('Gohan', 'Son', 6),
('Goten', 'Son', 3);

UPDATE `employeeDB`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');