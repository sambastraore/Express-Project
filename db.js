const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
    host:process.env.DB_HOST || 'mysql_db',
    user:process.env.DB_USER || 'root',
    password:process.env.DB_PASSWORD || 'root',
    database:process.env.DB_NAME || 'employee_db',
    port:process.env.DB_PORT || 3306
})

module.exports = mysqlPool