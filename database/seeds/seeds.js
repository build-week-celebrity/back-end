exports.seed = function(knex) {
  return knex("celebrities")
    .del()
    .then(() => {
      return knex("celebrities").insert([
        {
          id: 1,
          name: "Chuck Berry",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 77,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Chuck_Berry_1957.jpg"
        },
        {
          id: 2,
          name: "Paul McCartney",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_McCartney_in_October_2018.jpg"
        },
        {
          id: 3,
          name: "Adam West",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 88,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Adam_West_by_Gage_Skidmore_3.jpg"
        },
        {
          id: 4,
          name: "David Hasselhoff",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hoff_3.jpg"
        },
        {
          id: 5,
          name: "Dick Van Dyke",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Mary_Poppins3.jpg"
        },
        {
          id: 6,
          name: "Roger Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 89,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sir_Roger_Moore_3.jpg"
        },
        {
          id: 7,
          name: "Charlton Heston",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 84,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Charlton_Heston_in_Ben_Hur_trailer.jpg"
        },
        {
          id: 8,
          name: "Leonard Nimoy",
          isAlive: 0,
          yearDied: 2015,
          ageDied: 83,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Leonard_Nimoy_1975.jpg"
        },
        {
          id: 9,
          name: "William Shatner",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/b0/William_Shatner_-_1958.jpg"
        },
        {
          id: 10,
          name: "Mary Tyler Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 80,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/d/dc/Mary_Tyler_Moore_-_1978.jpg"
        },
        {
          id: 11,
          name: "Lucille Ball",
          isAlive: 0,
          yearDied: 1989,
          ageDied: 77,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/LDBALL1950s.jpg"
        },
        {
          id: 12,
          name: "Cindy Williams",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cindy_Williams.JPG"
        },
        {
          id: 13,
          name: "Penny Marshall",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 75,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Penny_Marshall_1976.jpg"
        },
        {
          id: 14,
          name: "Goldie Hawn",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Goldie_Hawn#/media/File:Goldie_Hawn_-_1978.jpg"
        },
        {
          id: 15,
          name: "Ted Danson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/bf/Ted_Danson_2008_number_2.jpg"
        }
      ]);
    })
    .then(() => {
      return knex("users").del();
    })
    .then(() => {
      return knex("users").insert([
        {
          email: "admin@email.com",
          username: "admin",
          password: "admin",
          score: 100
        }
      ]);
    });
};
