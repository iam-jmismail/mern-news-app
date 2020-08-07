require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/favorite", require("./routes/api/favorite"));

// Connect to MongoDB
mongoose.connect(
  process.env.MongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("Connected to MongoDB")
);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App Running"));
