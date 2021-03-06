const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");

// @POST - api/user
// @Desc - Register a new User
// @Access - Public
router.post(
  "/",
  [
    check("email", "Email cannot be empty").isEmail(),
    check("password", "Password cannot be Empty").isLength({ min: 6 }),
    check("username", "Username is Required").isLength({ min: 6 })
  ],
  async (req, res) => {
    const { email, password, username } = req.body;
    const errors = validationResult(req);
    // Validation
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if the User Exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User Already exists" }] });
      }

      user = new User({
        username,
        email,
        password
      });

      // Apply Gravatar for the User

      // Hash the Password

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the User to Database

      await user.save();

      // Return the Generated Token
      const payload = {
        id: user.id
      };
      jwt.sign(
        payload,
        process.env.JWTSecret,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);

module.exports = router;
