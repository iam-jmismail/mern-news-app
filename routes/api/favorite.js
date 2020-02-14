const router = require("express").Router();
const { validationResult, check } = require("express-validator");
const auth = require("../../middlewares/auth");
const Favorite = require("../../models/Favorite");

// @GET - api/favorite
// @Desc - Gets All Favorite of a User
// Access - Private

router.get("/", auth, async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user.id });
    res.json(favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @POST - api/favorite
// @Desc - Add News to Favorite
// @Access -  Private

router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is Required")
        .not()
        .isEmpty(),
      check("body", "Body is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const { title, body, source, date, img } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const favorite = new Favorite({
      user: req.user.id,
      title,
      body,
      img,
      source,
      date
    });

    try {
      await favorite.save();
      res.send(favorite);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @DELETE - api/favorite/:id
// @Desc - Delete a News from  Favorite
// @Access -  Private

router.delete("/:id", auth, async (req, res) => {
  try {
    const favorite = await Favorite.findByIdAndRemove(req.params.id);
    res.json(favorite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
