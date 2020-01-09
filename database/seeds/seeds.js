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
          difficulty: "medium"
        },
        {
          name: "Paul McCartney",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_McCartney_in_October_2018.jpg"
        },
        {
          name: "Adam West",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 88,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Adam_West_by_Gage_Skidmore_3.jpg"
        },
        {
          name: "David Hasselhoff",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
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
          difficulty: "medium",
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
          difficulty: "hard",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/d/dc/Mary_Tyler_Moore_-_1978.jpg"
        },
        {
          name: "Lucille Ball",
          isAlive: 0,
          yearDied: 1989,
          ageDied: 77,
          difficulty: "hard",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/LDBALL1950s.jpg"
        },
        {
          name: "Cindy Williams",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cindy_Williams.JPG"
        },
        {
          name: "Penny Marshall",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 75,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Penny_Marshall_1976.jpg"
        },
        {
          name: "Goldie Hawn",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/9/96/Goldie_Hawn_-_1978.jpg"
        },
        {
          name: "Ted Danson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/bf/Ted_Danson_2008_number_2.jpg"
        },
        {
          name: "Brittany Murphy",
          isAlive: 0,
          yearDied: 2009,
          ageDied: 32,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/Brittany_Murphy#/media/File:Brittany_Murphy.jpg"
        },
        {
          name: "Jonathan Brandis",
          isAlive: 0,
          yearDied: 2003,
          ageDied: 27,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/Jonathan_Brandis#/media/File:Jonathan_Brandis_Wiki.jpg"
        },
        {
          name: "Brad Renfro",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 25,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/Brad_Renfro#/media/File:Brad_Renfro_in_Apt_Pupil.jpg"
        },
        {
          name: "Chris Penn",
          isAlive: 0,
          yearDied: 2006,
          ageDied: 40,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/Chris_Penn#/media/File:Chris_Penn.jpg"
        },
        {
          name: "Bernie Mac",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 50,
          difficulty: "easy",
          imageURL:
            "https://en.wikipedia.org/wiki/Bernie_Mac#/media/File:BernieMacSoulMenMarch08.jpg"
        },
        {
          name: "Lee Thompson Young",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 29,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Lee_Thompson_Young#/media/File:Lee_Thompson_Young.jpg"
        },
        {
          name: "Dana Plato",
          isAlive: 0,
          yearDied: 1999,
          ageDied: 34,
          difficulty: "hard",
          imageURL:
            "https://m.media-amazon.com/images/M/MV5BMTg3ODUxMjU5NF5BMl5BanBnXkFtZTgwNjU4ODU1MTE@._V1_SY1000_CR0,0,652,1000_AL_.jpg"
        },
        {
          name: "Harold Ramis",
          isAlive: 0,
          yearDied: 2014,
          ageDied: 69,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Harold_Ramis#/media/File:Harold_Ramis_Oct_2009.jpg"
        },
        {
          name: "Dominique Dunne",
          isAlive: 0,
          yearDied: 1982,
          ageDied: 22,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/Dominique_Dunne#/media/File:Ellen_Griffin_Dunne_and_Dominique_Dunne.png"
        },

        {
          name: "Lisa Robin Kelly",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 43,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/Lisa_Robin_Kelly#/media/File:Lisa_Robin_Kelly.jpg"
        },
        {
          name: "James Avery",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 68,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/James_Avery_(actor)#/media/File:James_Avery.jpg"
        },
        {
          name: "Michael Clarke Duncan",
          isAlive: 0,
          yearDied: 2012,
          ageDied: 54,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Michael_Clarke_Duncan#/media/File:MichaelClarkeDuncanJan09.jpg"
        },
        {
          name: "Michael Jackson",
          isAlive: 0,
          yearDied: 2009,
          ageDied: 50,
          difficulty: "easy",
          imageURL:
            "https://en.wikipedia.org/wiki/Michael_Jackson#/media/File:Michael_Jackson_in_1988.jpg"
        },
        {
          name: "Dana Carvey",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Dana_Carvey#/media/File:Dana_Carvey_at_the_Governor's_Ball_following_the_41st_Annual_Emmy_Awards_cropped.jpg"
        },
        {
          name: "Pauly Shore",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Pauly_Shore#/media/File:Pauly_Shore_is_Dead_Red_Carpet.jpg"
        },
        {
          name: "Bob Newhart",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Bob_Newhart#/media/File:Comedian_Bob_Newhart.jpg"
        },
        {
          name: "Rick Moranis",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
          imageURL:
            "https://en.wikipedia.org/wiki/Rick_Moranis#/media/File:Rick_Moranis_at_the_62nd_Academy_Awards.jpg"
        },
        {
          name: "Doris Day",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 97,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Doris_Day#/media/File:Doris_Day_-_1957.JPG"
        },
        {
          name: "John Singleton",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 51,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/John_Singleton#/media/File:John_Singleton_2013_(cropped).jpg"
        },
        {
          name: "John Coughlin",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 33,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/John_Coughlin_(figure_skater)#/media/File:2011_Skate_America_Caydee_DENNEY_John_COUGHLIN_3.jpg"
        },
        {
          name: "Kristoff St. John",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 52,
          difficulty: "hard",
          imageURL:
            "https://en.wikipedia.org/wiki/Kristoff_St._John#/media/File:Kristoff_St._John_(46716837661).jpg"
        },
        {
          name: "Luke Perry",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 52,
          difficulty: "easy",
          imageURL:
            "https://en.wikipedia.org/wiki/Luke_Perry#/media/File:Luke_Perry_by_Gage_Skidmore_2.jpg"
        },
        {
          name: "Nipsey Hussle",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 29,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Nipsey_Hussle#/media/File:Soundtrack_Beat_Battle_Judging_Panel_March2011_(cropped).jpg"
        },
        {
          name: "Danny Aiello",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 86,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Danny_Aiello#/media/File:Danny_Aiello.jpg"
        },
        {
          name: "Caroll Spinney",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 85,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Caroll_Spinney#/media/File:Carroll_Spinney_2014.jpg"
        },
        {
          name: "Rip Torn",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 88,
          difficulty: "medium",
          imageURL:
            "https://en.wikipedia.org/wiki/Rip_Torn#/media/File:Rip_Torn_at_the_46th_Emmy_Awards_headcrop.jpg"
        },
        {
          name: "Sinbad",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
          imageURL:
            "https://en.wikipedia.org/wiki/Sinbad_(comedian)#/media/File:Entertainer_Sinbad.jpg"
        },
        {
          name: "Jaleel White",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          difficulty: "easy",
          imageURL:
            "https://en.wikipedia.org/wiki/Jaleel_White#/media/File:JaleelWhiteDec10.jpg"
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
