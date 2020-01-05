const router = require("express").Router();

const Celebs = require("./celebrities-model.js");

// return all celebs -- works
router.get("/", (req, res) => {
  Celebs.getCelebrities()
    .then(celebs => {
      res.status(200).json(celebs);
    })
    .catch(err => res.send(err));
});

// return specific celeb -- works

router.get("/:id", validateCelebId, (req, res) => {
  res.status(200).json(req.celeb);
});

// delete a celeb -- works
router.delete("/:id", validateCelebId, (req, res) => {
  const { id } = req.params;
  Celebs.removeCelebrity(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      console.log("delete error", err);
      res.status(500).json({ error: "Error removing celebrity" });
    });
});

// post a new celeb -- works
router.post("/", (req, res) => {
  const { name, isAlive, yearDied, ageDied, imageURL } = req.body;
  if (!name || typeof isAlive !== "boolean") {
    return res.status(400).json({
      error: 'Needs name and isAlive value. "isAlive" must be a boolean'
    });
  }

  Celebs.insertCelebrity({ name, isAlive, yearDied, ageDied, imageURL })
    .then(celeb => {
      res.status(200).json(celeb);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error inserting celebrity" });
    });
});

// edit a celeb -- works

router.put("/:id", validateCelebId, (req, res) => {
  const { id } = req.params;
  const { name, isAlive, yearDied, ageDied, imageURL } = req.body;
  if (typeof isAlive !== "boolean") {
    return res.status(400).json({
      error: 'isAlive" must be a boolean'
    });
  }
  Celebs.updateCelebrity(id, { name, isAlive, yearDied, ageDied, imageURL })
    .then(updatedCeleb => {
      res.status(200).json(updatedCeleb);
    })
    .catch(err => {
      console.log("update error", err);
      res.status(500).json({ error: "Error editing celebrity" });
    });
});

//middleware

function validateCelebId(req, res, next) {
  const { id } = req.params;
  Celebs.getCelebrityById(id).then(celeb => {
    if (celeb) {
      req.celeb = celeb;
      next();
    } else {
      res
        .status(404)
        .json({ error: "There is no celebrity with the specified id" });
    }
  });
}
module.exports = router;
