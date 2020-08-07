const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  registeredOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
