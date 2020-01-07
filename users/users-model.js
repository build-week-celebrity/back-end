const db = require("../database/db.js");

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  find,
  findBy,
  findById,
  findByName,
  findWithoutId
};

function find() {
  return db("users").select("id", "username", "score");
}

function findWithoutId() {
  return db("users").select("username", "score");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findByName(name) {
  return db("users")
    .where("username", name)
    .select("username", "score", "id");
}

function findById(id) {
  return db("users")
    .where("id", id)
    .select("username", "score", "id");
}

async function addUser(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function deleteUser(id) {
  return db("users")
    .where("id", id)
    .del();
}

function updateUser(id, changes) {
  return db("users")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? findById(id) : null));
}
