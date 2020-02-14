const router = require("express").Router();

// @POST - api/user
// @Desc - Gets Profile
// @Access - Public
router.post("/", (req, res) => {
  res.send("Post Route ");
});

module.exports = router;
