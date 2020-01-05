const router = require("express").Router();

const Celebs = require("./celebrities-model.js");

router.get("/", (req, res) => {
  Celebs.getCelebrities()
    .then(celebs => {
      res.status(200).json(celebs);
    })
    .catch(err => res.send(err));
});

module.exports = router;
