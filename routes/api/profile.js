const router = require("express").Router();
const { validationResult, check } = require("express-validator");
const auth = require("../../middlewares/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @POST - api/profile
// @Desc - Add or Update Profile
// @Access -  Private
router.post(
  "/",
  [
    auth,
    [
      check("city", "Your City is required for our service")
        .not()
        .isEmpty(),
      check("state", "Your State is required for our service")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const { city, state, interests, hobbies } = req.body;
    const errors = validationResult(req);
    // Validation
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const profileObject = {};
    profileObject.user = req.user.id;
    if (city) profileObject.city = city;
    if (state) profileObject.state = state;
    if (interests) {
      profileObject.interests = interests.split(",").map(item => item.trim());
    }
    if (hobbies) {
      profileObject.hobbies = hobbies.split(",").map(item => item.trim());
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileObject },
          { new: true }
        );
        return res.status(400).json(profile);
      }
      profile = new Profile(profileObject);
      await profile.save();
      return res.status(400).json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @GET - api/profile/me
// @Desc - Get My Profile
// @Access -  Private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("users", ["username", "email"]);
    if (!profile) {
      return res.status(400).json({ msg: "No Profile for this user " });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @GET - api/profile/
// @Desc - Get all Profiles
// @Access -  Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("users", [
      "username",
      "email"
    ]);
    res.send(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @POST - api/profile/education
// @Desc - Add Educational Qualifications
// @Access -  Private

router.post(
  "/education",
  [
    auth,
    [
      check("title", "Title is Required")
        .not()
        .isEmpty(),
      check("institution", "Institution name is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const { title, institution, from, to } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      const education = {
        title,
        institution,
        from,
        to
      };
      profile.education.unshift(education);
      await profile.save();
      res.send(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @DELETE - api/profile/education/:id
// @Desc - Remove Educational Qualifications
// @Access -  Private

router.delete("/education/:id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.id);

    profile.education.splice(removeIndex);
    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @DELETE - api/profile/
// @Desc - Delete Profile & Users
// @Access -  Private

router.delete("/", auth, async (req, res) => {
  try {
    // Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove Posts
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
