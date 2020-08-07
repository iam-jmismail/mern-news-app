const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No Token Authorization" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWTSecret);
    req.user = decoded;
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  next();
};
