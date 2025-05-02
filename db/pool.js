const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool(); // uses environment variables

module.exports = pool;
