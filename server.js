const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/auth", require("./routes/api/auth"));

// Connect to MongoDB
mongoose.connect(
  process.env.MongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("Connected to MongoDB")
);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App Running"));
