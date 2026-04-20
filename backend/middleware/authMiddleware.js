const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

/*
Server refers to backend
Verifies JWT token
User logs in
Server verifies email & password
Generates a JWT token
User sends token in every request
If valid → allow access
If invalid → reject request
*/