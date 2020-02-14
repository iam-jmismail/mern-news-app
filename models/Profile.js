const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  city: {
    type: String
  },
  state: {
    type: String
  },

  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
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
      institution: {
        type: String
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
