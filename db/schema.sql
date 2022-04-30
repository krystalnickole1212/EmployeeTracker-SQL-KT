CREATE DATABASE IF EXISTS employeeDB ()
CREATE DATABASE employeeDB;
USE employeeBD;
CREATE TABLE department (
    id INTEGER AUTO_INCEREMENT PRIMARY KEY, 
    name VARCHAR(30)
);

CREATE TABLE role (
    id INTEGER AUTO_INCEREMENT PRIMARY KEY, 
    title VARCHAR(30),
    salary DECIMAL, 
    department id, INTEGER, 
    FOREIGN KEY(department_id)
references department(id)
);

CREATE TABLE employee  (
    id INTEGER PRIMARY KEY AUTO_INCEREMENT, 
    first_name VARCHAR(30), 
    last_name VARCHAR(30),
    role_id INTEGER, 
    manager_id INTEGER, 
    FOREIGN KEY (role_id)references role(id), 
    FOREIGN KEY(manager_id)references employee(id)
    );

