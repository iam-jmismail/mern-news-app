const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Profile = require("../../models/Profile");
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
    check("fname", "Firstname is Required").notEmpty(),
    check("lname", "Lastname is Required").notEmpty(),
    check("city", "City is Required").notEmpty(),
    check("country", "Country is Required").notEmpty()
  ],
  async (req, res) => {
    const { fname, lname, email, password, city, country } = req.body;
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
        email
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the User to Database
      await user.save();

      // Save User Profile 
      const profile = new Profile({
        user: user._id,
        firstName: fname,
        lastName: lname,
        city,
        country
      })


      await profile.save();

      const payload = {
        id: user._id
      };

      jwt.sign(
        payload,
        process.env.JWTSecret,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );


    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);

module.exports = router;
