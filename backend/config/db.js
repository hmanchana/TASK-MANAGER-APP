const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "taskmanager",
  password: "password",
  port: 5432,
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