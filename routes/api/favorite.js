const router = require("express").Router();
const { validationResult, check } = require("express-validator");
const auth = require("../../middlewares/auth");
const Favorite = require("../../models/Favorite");

// @GET - api/favorite
// @Desc - Gets All Favorite of a User
// Access - Private

router.get("/", auth, async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user._id });
    res.json(favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @POST - api/favorite
// @Desc - Add News to Favorite
// @Access -  Private

router.post("/", auth, async (req, res) => {
  const { title, description, content, publishedAt, source, url } = req.body;
  const favorite = new Favorite({
    user: req.user._id,
    title,
    description,
    content,
    publishedAt,
    source,
    url,
  });

  try {
    await favorite.save();
    res.send(favorite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

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
