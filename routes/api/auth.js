const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Profile = require("../../models/Profile");
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
    check("password", "Password cannot be Empty").isLength({ min: 6 }),
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
      } else {
        // check the Password
        const isMatch = await bcrypt.compare(password, user.password);

        const payload = {
          id: user._id,
        };

        //  Generate Tokens

        if (isMatch) {
          jwt.sign(payload, process.env.JWTSecret, (err, token) => {
            if (err) throw err;
            res.status(200).json({ token });
          });
        } else {
          return res
            .status(400)
            .json({ errors: [{ msg: "Incorrect password" }] });
        }
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
  const user = await User.findById(req.user.id).select("-password");
  const profile = await Profile.findOne({ user: req.user.id });

  if (user)
    return res.status(200).json({
      user,
      profile,
    });
});

module.exports = router;
