const db = require ('./config.connection.js');

const viewDepartment = async function(){
    //open employeeDB
    //promise wrapper
    return new Promise(function (resolve, reject) {
        db.query(
        'SELECT * FROM `employeeDB.department`;' 
        , (error(res));
        )};
        
const viewRoles = async function(){
//open employeeDB
//promise wrapper
return new Promise(function (resolve, reject) {
    db.query(
    'SELECT * FROM `employeeDB.role`;' 
    , (error(res));
    )};

module.exports={viewDepartment, viewRoles}