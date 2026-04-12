const express = require("express");
const auth = require("../middleware/authMiddleware");
const { getTasks, addTask, deleteTask, completeTask } = require("../models/Task");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const tasks = await getTasks(req.user.id);
  res.json(tasks);
});

router.post("/", auth, async (req, res) => {
  const task = await addTask(req.user.id, req.body.title);
  res.json(task);
});

router.delete("/:id", auth, async (req, res) => {
  await deleteTask(req.params.id);
  res.json({ message: "Deleted" });
});

router.put("/:id", auth, async (req, res) => {
  await completeTask(req.params.id);
  res.json({ message: "Completed" });
});

module.exports = router;

/*
Task CRUD routes = API endpoints that 
perform create, read, update, and delete operations on tasks
GET    /api/tasks        → Read tasks
POST   /api/tasks        → Create task
PUT    /api/tasks/:id    → Update (complete)
DELETE /api/tasks/:id    → Delete task
Yes — tasks.js handles the API request, then calls Task.js which updates the database.
*/