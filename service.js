const db = require("./db");

module.exports.getAllEmployees = async () => {
    const [records] = await db.query("SELECT * FROM employees")
    return records;
}


module.exports.getEmployeeById = async (id) => {
    const [record] = await db.query("SELECT * FROM employees WHERE id = ?",[id])
    return record;
}

module.exports.deleteEmployeeById = async (id) => {
    const [record] = await db.query("DELETE FROM employees WHERE id = ?",[id])
    return record.affectedRows;
}



