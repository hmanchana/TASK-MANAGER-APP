TECH STACK (Short & Clear)
Frontend → HTML, CSS, Vanilla JS (simple & fast)
Backend → Node.js + Express
Database → PostgreSQL (using pg)
Auth → JWT (secure, stateless)
Deployment → Works with Docker / EC2 / EKS

// Run this in PostgreSQL
/*
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title TEXT,
  completed BOOLEAN DEFAULT FALSE
);
*/