const db = require("../database/db.js");

// get all celebs
function getCelebrities() {
  return db("celebrities");
}

// get specific celeb
function getCelebrityById(id) {
  return db("celebrities")
    .where({ id })
    .first();
}

// insert celeb
function insertCelebrity(celeb) {
  return db("celebrities")
    .insert(celeb, "id")
    .then(([id]) => getCelebrityById(id));
}

// remove celeb
function removeCelebrity(id) {
  return db("celebrities")
    .where("id", id)
    .del();
}

// update celeb

function updateCelebrity(id, changes) {
  return db("celebrities")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? getCelebrityById(id) : null));
}

module.exports = {
  getCelebrities,
  getCelebrityById,
  insertCelebrity,
  removeCelebrity,
  updateCelebrity
};
