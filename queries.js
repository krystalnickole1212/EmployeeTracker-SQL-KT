const db = require ('./config.connection.js');

const viewDepartment = async function(){
    //open employeeDB
    return await db.query(
        'SELECT * FROM `employeeDB.department`;' 
    )
};

module.exports={viewDepartment}