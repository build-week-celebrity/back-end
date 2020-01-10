const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/authenticate-middleware.js");

// get all the users -- works

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

// // get user based on username -- works

// router.get("/name/:username", validateUsername, restricted, (req, res) => {
//   const username = req.params.username;
//   Users.findByName(username)
//     .then(user => {
//       res.status(200).json({ user, loggedInUser: req.user.username });
//     })
//     .catch(err => res.send(err));
// });

// // get user based on id -- works

router.get("/:id", validateUserId, restricted, (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => {
      res.status(200).json({ user, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

// remove a user -- works

router.delete("/:id", validateUserId, (req, res) => {
  const { id } = req.params;
  Users.deleteUser(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      console.log("delete error", err);
      res.status(500).json({ error: "Error removing user" });
    });
});

// edit a user -- works

router.put("/:id", validateUserId, (req, res) => {
  const { id } = req.params;
  const { username, password, email, score } = req.body;
  // if (!username || !password) {
  //   return res.status(400).json({
  //     error: 'Needs username and password'
  //   });
  // }
  Users.updateUser(id, { username, password, email, score })
    .then(updatedUser => {
      res.status(200).json(updatedUser);
    })
    .catch(err => {
      console.log("update error", err);
      res.status(500).json({ error: "Error updating user" });
    });
});

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

// function validateUsername(req, res, next) {
//   const { username } = req.params;
//   Users.findByName(username).then(user => {
//     if (user) {
//       req.user = user;
//       next();
//     } else {
//       res
//         .status(404)
//         .json({ error: "There is no user with the specified username" });
//     }
//   });
// }

module.exports = router;
