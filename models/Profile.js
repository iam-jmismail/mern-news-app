const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  city: {
    type: String
  },
  country: {
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
