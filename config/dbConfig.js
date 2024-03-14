const { Pool } = require('pg'); // Import the PostgreSQL client library

// Load environment variables securely (refer to best practices)
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE // Default port for PostgreSQL
});

async function query(sql, params = []) {
  try {
    const client = await pool.connect();
    const result = await client.query(sql, params);
    await client.release();
    return result.rows;
  } catch (error) {
    console.error('Error running query:', error);
    throw error; // Re-throw the error for proper handling
  }
}

async function queryOne(sql, params = []) {
  try {
    const result = await query(sql, params);
    return result[0];
  } catch (error) {
    console.error('Error running query:', error);
    throw error; // Re-throw the error for proper handling
  }
}

async function start() {
  try {
    const result = await query('SELECT * FROM mentor');
    console.log(result);
  } catch (error) {
    console.error('Error in start function:', error);
  }
}

// Export the connection pool for potential reus

module.exports = { pool, query, queryOne };