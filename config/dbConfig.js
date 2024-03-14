const mysql = require("mysql2");
const dotenv =  require('dotenv');
dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

module.exports.pool = pool;


// const {Pool} = require('pg');
// const dotenv = require('dotenv');
// dotenv.config();

// const poolConfig = {
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE
// };

// poolConfig.ssl = {
//     rejectUnauthorized: false
// };
// poolConfig.connectionString = process.env.DATABASE_URL;

// const client = new Pool(poolConfig);

// client.connect((err)=>{
//     if(err){
//         console.log('Error connecting to the database');
//     }else{
//         console.log('Connected to the database');
//     }
// });

// module.exports.pool = client;