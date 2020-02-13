const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middlewares/auth");

require("dotenv/config");

// @POST - api/auth
// @Desc - Existing User to Login
// @Access - Public
router.post(
  "/",
  [
    check("email", "Email cannot be empty").isEmail(),
    check("password", "Password cannot be Empty").isLength({ min: 6 })
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    // Validation
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if the User Exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "No Such User exists" }] });
      }

      // check the Password

      const isMatch = await bcrypt.compare(password, user.password);

      const payload = {
        id: user.id
      };

      //  Generate Tokens

      if (isMatch) {
        jwt.sign(
          payload,
          process.env.JWTSecret,
          { expiresIn: 36000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);

// @GET - api/auth
// @Desc - Get the Logged User
// @Access - Private
router.get("/", auth, async (req, res) => {
  res.send("User Verified");
});

module.exports = router;
