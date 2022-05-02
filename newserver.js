var inquirer = require('inquirer');
//import{viewDepartment, viewRole, viewEmployee, insertRole} from './queries.js';
var sqlstuff = require('./queries.js');

function addRole() {
    inquirer.prompt([ 
        {
            type: "input",
            name: "roleName",
            message: "What is the name of the role you would like to create?",
        },
        {
            type: "input",
            name: "roleSalary",
            message: "What is the salary of the role you would like to create?",
        },
        {
            type: "input",
            name: "roleDepartmentId",
            message: "What is the department id of the role you would like to create?"
        },
    ]).then(answers => {
        sqlstuff.insertRole(answers.roleName, answers.roleSalary, answers.roleDepartmentId)
    })}

function addEmployee() {
    inquirer.prompt([ 
        {
            type: "input",
            name: "employeeFirstName",
            message: "What is the first name of the employee you would like to add?"
        },
        {
            type: "input",
            name: "employeeLasttName",
            message: "What is the last name of the employee you would like to add?"
        },
        {
            type: "input",
            name: "employeeRoleId",
            message: "What is the role ID of the employee you would like to add?"
        },
        {
            type: "input",
            name: "employeeManagerId",
            message: "What is the manager id of the employee you would like to add?"
        } 
    ])}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeToUpdate",
            message: "Select an employee to update."
        }, 
        {
            type: "input",
            name: "employeeNewRole",
            message: "What is the employee's new role?"
        } 
    ])
}

function addDepartment () {
    inquirer.prompt([
    
        {
            type: "input",
            name: "newDepartmentName",
            message: "What is the name of the department you would like to add?"
        } 
    ])}

function main() {
    inquirer.prompt([
        {
            type: "list",
            name: "menuChoices",
            message: "What action would you like to take?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        }
    ]).then(answers => {
        switch (answers.menuChoices) {
            case 'view all departments':
                console.log("BANANANANA")
                break;
            case 'view all roles':
                console.log("BANANANANA")
                break;
            case 'view all employees':
                console.log("BANANANANA")
                break;
            case 'add a department':
                addDepartment();
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
            case 'add an employee role':
                updateEmployeeRole();
                break;
        }
    })
}

main()        