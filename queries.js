//var db = require('./config/connection.js');

function viewDepartment () {
    //open employeeDB
    //promise wrapper
    return new Promise(function (resolve, reject) {
        db.query(
            'SELECT * FROM `employeeDB.department`;'
            , (error, res) => {
                resolve(res);
            })
    }
    )
}

function viewRole () {
    //open employeeDB
    //promise wrapper
    return new Promise(function (resolve, reject) {
        db.query(
            'SELECT * FROM `employeeDB.role`;'
            , (error, res) => {
                resolve(res);
            })
    }
    )
}

function viewEmployee () {
    //open employeeDB
    //promise wrapper
    return new Promise(function (resolve, reject) {
        db.query(
            'SELECT * FROM `employeeDB.employee`;'
            , (error, res) => {
                resolve(res);
            })
    }
    )
}

function insertRole (roleName, salary, departmentId) {
    //open employeeDB
    //promise wrapper
    console.log("role: " + roleName)
    return new Promise(function (resolve, reject) {
        var db = require('./config/connection.js');
        var sql = "INSERT INTO role (title, salary, department_id) VALUE ('" + roleName + "', " + salary + ", " + departmentId + ");"
        console.log(sql)
        db.query(
            "INSERT INTO role (title, salary, department_id) VALUE ('" + roleName + "', " + salary + ", " + departmentId + ");"
            , (error, res) => {
                resolve(res);
            })
    }
    )
}

module.exports = { viewDepartment, viewRole, viewEmployee, insertRole}