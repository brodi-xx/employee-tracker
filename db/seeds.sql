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
('Full Stack Dev', 150000, 6);

INSERT INTO employee(first_name, last_name, role_id, fkmanager_id, manager_id) 
VALUES
('Master', 'Roshi', 1, NULL, 1),
('Android', '17', 5, NULL, 1),
('Android', '18', 2, NULL, 1),
('Goku', 'Son', 3, NULL, 1),
('Gohan', 'Son', 6, NULL, 1),
('Goten', 'Son', 3, NULL, 1);


UPDATE `employeeDB`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');