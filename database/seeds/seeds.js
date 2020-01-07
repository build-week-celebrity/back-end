exports.seed = function(knex) {
  return knex("celebrities")
    .del()
    .then(() => {
      return knex("celebrities").insert([
        {
          name: "Chuck Berry",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 77,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Chuck_Berry_1957.jpg",
          difficulty: "easy"
        },
        {
          name: "Paul McCartney",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_McCartney_in_October_2018.jpg"
        },
        {
          name: "Adam West",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 88,
          difficulty: "hard",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Adam_West_by_Gage_Skidmore_3.jpg"
        },
        {
          name: "David Hasselhoff",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hoff_3.jpg"
        },
        {
          name: "Dick Van Dyke",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Mary_Poppins3.jpg"
        },
        {
          name: "Roger Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 89,
          difficulty: "hard",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sir_Roger_Moore_3.jpg"
        },
        {
          name: "Charlton Heston",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 84,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Charlton_Heston_in_Ben_Hur_trailer.jpg"
        },
        {
          name: "Leonard Nimoy",
          isAlive: 0,
          yearDied: 2015,
          ageDied: 83,
          difficulty: "medium",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Leonard_Nimoy_1975.jpg"
        },
        {
          name: "William Shatner",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/b0/William_Shatner_-_1958.jpg"
        },
        {
          name: "Mary Tyler Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 80,
          difficulty: "medium",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/d/dc/Mary_Tyler_Moore_-_1978.jpg"
        },
        {
          name: "Lucille Ball",
          isAlive: 0,
          yearDied: 1989,
          ageDied: 77,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/LDBALL1950s.jpg"
        },
        {
          name: "Cindy Williams",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "hard",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cindy_Williams.JPG"
        },
        {
          name: "Penny Marshall",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 75,
          difficulty: "hard",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Penny_Marshall_1976.jpg"
        },
        {
          name: "Goldie Hawn",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/9/96/Goldie_Hawn_-_1978.jpg"
        },
        {
          name: "Ted Danson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "hard",
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
          score: 55
        },
        {
          email: "tony@starkindustries.com",
          username: "iamironman",
          password: "smartestavenger",
          score: 100
        },
        {
          email: "hulk@smash.com",
          username: "hulk",
          password: "smash",
          score: 0
        },
        {
          email: "thor@godofthunder.com",
          username: "thor",
          password: "sparkles",
          score: 10
        },
        {
          email: "capamerica@aol.com",
          username: "cap",
          password: "shield",
          score: 15
        },
        {
          email: "clintbarton@gmail.com",
          username: "hawkeye",
          password: "i<3purple",
          score: 90
        },
        {
          email: "blackwidow@gmail.com",
          username: "widowmaker",
          password: "jf838jfdsf",
          score: 95
        },
        {
          email: "webslinger@starkindustries.com",
          username: "yfnSpiderman",
          password: "radioactive",
          score: 93
        },
        {
          email: "visionw@starkindustries.com",
          username: "Vision",
          password: "2020",
          score: 100
        },
        {
          email: "starlord@aol.com",
          username: "StarLord",
          password: "redbone",
          score: 70
        }
      ]);
    });
};
