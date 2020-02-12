const router = require("express").Router();

// @POST - api/user
// @Desc - Gets Profile
// @Access - Public
router.post("/", (req, res) => {
  res.send("Profile Route ");
});

module.exports = router;
