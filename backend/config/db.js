const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432
});

module.exports = pool;

/*
Handles PostgreSQL connection
From: your Node.js backend (Express app)
To: PostgreSQL database (local / RDS / container)
server.js / routes / models
        ↓
     db.js   ← (creates connection)
        ↓
 PostgreSQL DB
 */