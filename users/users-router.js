const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/authenticate-middleware.js");

// get all the users

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

// get user based on username

router.get("/:username", restricted, (req, res) => {
  let username = req.params.username;
  Users.findByName(username)
    .then(user => {
      res.status(200).json({ user, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

// get user based on id

router.get("/:id", validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

// remove a user

// edit a user

// Middleware

function validateUserId(req, res, next) {
  const { id } = req.params;
  Users.findById(id).then(user => {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ error: "There is no user with the specified id" });
    }
  });
}

module.exports = router;
