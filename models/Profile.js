const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  interests: {
    type: [String]
  },
  hobbies: {
    type: [String]
  },
  education: [
    {
      title: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model("Profile", ProfileSchema);
