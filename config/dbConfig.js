const mysql = require("mysql2");
const dotenv =  require('dotenv');
dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

// async function query(sql, params) {

//     const [rows, fields] = await pool.query(sql, params);

//     return rows;
// }
// async function queryOne(sql, params) {
//     const rows = await query(sql, params);
//     return rows[0];
// }
// async function start() {
 
//     const result = await await query("SELECT * FROM mentor");
//     console.log(result);
//  }
//  start();
module.exports.pool = pool;