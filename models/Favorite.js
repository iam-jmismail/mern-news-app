const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  img: {
    type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  source: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
