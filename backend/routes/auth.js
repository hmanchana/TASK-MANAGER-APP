const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const user = await createUser(email, password);

  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (!user) return res.status(400).json({ message: "User not found" });

  if (password !== user.password)
    return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "2d" }
  );

  res.json({ token });
});

module.exports = router;

/*
Signup & Login
ignup & Login connect to DB and verify/store email & password correctly
*/