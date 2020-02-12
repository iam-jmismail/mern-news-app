const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");

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
      res.send("User Route");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);

module.exports = router;
