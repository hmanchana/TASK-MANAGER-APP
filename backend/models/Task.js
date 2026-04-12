const pool = require("../config/db");

const getTasks = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE user_id = $1",
    [userId]
  );
  return result.rows;
};

const addTask = async (userId, title) => {
  const result = await pool.query(
    "INSERT INTO tasks (user_id, title) VALUES ($1, $2) RETURNING *",
    [userId, title]
  );
  return result.rows[0];
};

const deleteTask = async (taskId) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [taskId]);
};

const completeTask = async (taskId) => {
  await pool.query(
    "UPDATE tasks SET completed = true WHERE id = $1",
    [taskId]
  );
};

module.exports = { getTasks, addTask, deleteTask, completeTask };

/*
Handles task operations in DB
➕ Add task
📋 Get tasks
✔ Mark complete
❌ Delete task
*/