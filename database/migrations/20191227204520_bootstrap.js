exports.up = function(knex) {
  return knex.schema
    .createTable("celebrities", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.integer("yearDied");
      tbl.integer("ageDied");
      tbl.boolean("isAlive").notNullable();
      tbl.string("imageURL");
      tbl.string("difficulty");
    })

    .createTable("users", users => {
      users.increments();
      users
        .string("username")
        .notNullable()
        .unique();
      users.string("password").notNullable();
      users.string("email").unique();
      users.integer("score");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("celebrities");
};
