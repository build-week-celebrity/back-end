const db = require("../database/db.js");

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  find,
  findBy,
  findById,
  findByName
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findByName(name) {
  return db("users").where("username", name);
}

async function addUser(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
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
    .then(count => (count > 0 ? this.get(id) : null));
}
