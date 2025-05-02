const { Pool } = require("pg");
require("dotenv").config();

// const pool = new Pool(); // uses environment variables
const pool = new Pool({
  connectionString: process.env.PGDATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Important for Render-hosted DBs
});

module.exports = pool;
