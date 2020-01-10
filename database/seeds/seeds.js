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
            "https://upload.wikimedia.org/wikipedia/commons/c/ca/Chuck-berry-2007-07-18.jpg",
          difficulty: "medium"
        },
        {
          name: "Paul McCartney",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_McCartney_in_October_2018.jpg",
          difficulty: "easy"
        },
        {
          name: "Adam West",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 88,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Adam_West_by_Gage_Skidmore_3.jpg/1920px-Adam_West_by_Gage_Skidmore_3.jpg",
          difficulty: "easy"
        },
        {
          name: "David Hasselhoff",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Hoff_3.jpg/220px-Hoff_3.jpg",
          difficulty: "easy"
        },
        {
          name: "Dick Van Dyke",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Dick_Van_Dyke_by_Gage_Skidmore.jpg/250px-Dick_Van_Dyke_by_Gage_Skidmore.jpg",
          difficulty: "medium"
        },
        {
          name: "Roger Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 89,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Roger_Moore_2014.jpg",
          difficulty: "medium"
        },
        {
          name: "Charlton Heston",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 84,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Charlton_Heston_Civil_Rights_March_1963.jpg/1200px-Charlton_Heston_Civil_Rights_March_1963.jpg",
          difficulty: "easy"
        },
        {
          name: "Leonard Nimoy",
          isAlive: 0,
          yearDied: 2015,
          ageDied: 83,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/2/23/Leonard_Nimoy_mid_1960s.JPG",
          difficulty: "easy"
        },
        {
          name: "William Shatner",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/4/48/William_Shatner_2018.jpg",
          difficulty: "easy"
        },
        {
          name: "Mary Tyler Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 80,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Mary_Tyler_Moore_%281967%29.jpg/1200px-Mary_Tyler_Moore_%281967%29.jpg",
          difficulty: "hard"
        },
        {
          name: "Lucille Ball",
          isAlive: 0,
          yearDied: 1989,
          ageDied: 77,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/LDBALL1950s.jpg",
          difficulty: "hard"
        },
        {
          name: "Cindy Williams",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cindy_Williams.JPG",
          difficulty: "medium"
        },
        {
          name: "Penny Marshall",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 75,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Penny_Marshall_1976.png",
          difficulty: "easy"
        },
        {
          name: "Goldie Hawn",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Goldie_Hawn_2011.jpg/220px-Goldie_Hawn_2011.jpg",
          difficulty: "easy"
        },
        {
          name: "Ted Danson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ted_Danson_2010.jpg/220px-Ted_Danson_2010.jpg",
          difficulty: "easy"
        },
        {
          name: "Brittany Murphy",
          isAlive: 0,
          yearDied: 2009,
          ageDied: 32,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Brittany_Murphy_at_Happy_Feet_premiere_(cropped).jpg/190px-Brittany_Murphy_at_Happy_Feet_premiere_(cropped).jpg",
          difficulty: "hard"
        },
        {
          name: "Jonathan Brandis",
          isAlive: 0,
          yearDied: 2003,
          ageDied: 27,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Jonathan_Brandis_Wiki.jpg/220px-Jonathan_Brandis_Wiki.jpg",
          difficulty: "hard"
        },
        {
          name: "Brad Renfro",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 25,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Brad_Renfro_mug_shot.jpg",
          difficulty: "hard"
        },
        {
          name: "Chris Penn",
          isAlive: 0,
          yearDied: 2006,
          ageDied: 40,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/3/32/Chris_Penn.jpg",
          difficulty: "hard"
        },
        {
          name: "Bernie Mac",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 50,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/1/11/BernieMacTransformersPremiereJune07.jpg",
          difficulty: "easy"
        },
        {
          name: "Lee Thompson Young",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 29,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/8/85/Lee_Thompson_Young.jpg",
          difficulty: "medium"
        },
        {
          name: "Dana Plato",
          isAlive: 0,
          yearDied: 1999,
          ageDied: 34,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/pt/a/a8/Dana_Plato.jpg",
          difficulty: "hard"
        },
        {
          name: "Harold Ramis",
          isAlive: 0,
          yearDied: 2014,
          ageDied: 69,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Harold_Ramis_as_Egon_Spengler.jpg/250px-Harold_Ramis_as_Egon_Spengler.jpg",
          difficulty: "medium"
        },
        {
          name: "Dominique Dunne",
          isAlive: 0,
          yearDied: 1982,
          ageDied: 22,
          imageURL:
            "http://4.bp.blogspot.com/-B0-zDcNi2RQ/ThuUUqsib5I/AAAAAAAAAJ0/w1OSvFYApoY/s1600/dunne-d-color.JPG",
          difficulty: "hard"
        },
        {
          name: "Lisa Robin Kelly",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 43,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/d/d8/Lisa_Robin_Kelly.jpg",
          difficulty: "hard"
        },
        {
          name: "James Avery",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 68,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/6/67/James_Avery_HAL_Awards_%28cropped%29.jpg",
          difficulty: "medium"
        },
        {
          name: "Michael Clarke Duncan",
          isAlive: 0,
          yearDied: 2012,
          ageDied: 54,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/MichaelClarkeDuncanJan09_%282%29.jpg",
          difficulty: "medium"
        },
        {
          name: "Michael Jackson",
          isAlive: 0,
          yearDied: 2009,
          ageDied: 50,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Michael_Jackson_Cannescropped.jpg/170px-Michael_Jackson_Cannescropped.jpg",
          difficulty: "easy"
        },
        {
          name: "Dana Carvey",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Dana_Carvey_at_the_Governor%27s_Ball_following_the_41st_Annual_Emmy_Awards_cropped.jpg/137px-Dana_Carvey_at_the_Governor%27s_Ball_following_the_41st_Annual_Emmy_Awards_cropped.jpg",
          difficulty: "medium"
        },
        {
          name: "Pauly Shore",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pauly_Shore_is_Dead_Red_Carpet.jpg/1200px-Pauly_Shore_is_Dead_Red_Carpet.jpg",
          difficulty: "medium"
        },
        {
          name: "Bob Newhart",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Comedian_Bob_Newhart.jpg/220px-Comedian_Bob_Newhart.jpg",
          difficulty: "medium"
        },
        {
          name: "Rick Moranis",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "ttps://upload.wikimedia.org/wikipedia/commons/b/bb/Rick_Moranis_at_the_62nd_Academy_Awards.jpg",
          difficulty: "easy"
        },
        {
          name: "Doris Day",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 97,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Doris_Day_-_1957.JPG/220px-Doris_Day_-_1957.JPG",
          difficulty: "medium"
        },
        {
          name: "John Singleton",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 51,
          imageURL:
            "https://en.wikipedia.org/wiki/John_Singleton#/media/File:John_Singleton_2013_(cropped).jpg",
          difficulty: "hard"
        },
        {
          name: "John Coughlin",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 33,
          imageURL:
            "https://en.wikipedia.org/wiki/John_Coughlin_(figure_skater)#/media/File:2011_Skate_America_Caydee_DENNEY_John_COUGHLIN_3.jpg",
          difficulty: "medium"
        },
        {
          name: "Kristoff St. John",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 52,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/9/97/Kristoff_St._John_%2846716837661%29.jpg",
          difficulty: "hard"
        },
        {
          name: "Luke Perry",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 52,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/d/db/Luke_Perry_by_Gage_Skidmore.jpg",
          difficulty: "easy"
        },
        {
          name: "Nipsey Hussle",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 29,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nipsey_Hussle_2013_December.jpg/1200px-Nipsey_Hussle_2013_December.jpg",
          difficulty: "medium"
        },
        {
          name: "Danny Aiello",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 86,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/4/41/Danny_Aiello.jpg",
          difficulty: "medium"
        },
        {
          name: "Caroll Spinney",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 85,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carroll_Spinney_2014.jpg/220px-Carroll_Spinney_2014.jpg",
          difficulty: "medium"
        },
        {
          name: "Rip Torn",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 88,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rip_Torn_2015_%28cropped%29.jpg/220px-Rip_Torn_2015_%28cropped%29.jpg",
          difficulty: "medium"
        },
        {
          name: "Sinbad",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Entertainer_Sinbad.jpg",
          difficulty: "easy"
        },
        {
          name: "Jaleel White",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/8/8f/Jaleel_White_at_the_2010_Streamy_Awards_%28cropped%29.jpg",
          difficulty: "easy"
        },
        {
          name: "Bronson Pinchot",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Bronson_Pinchot_2012.jpg",
          difficulty: "hard"
        },
        {
          name: "Stephen Collins",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/e/e8/Stephen_Collins_2014.jpg",
          difficulty: "medium"
        },
        {
          name: "Chuck Woolery",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chuck_Woolery_2004_cropped.jpg/245px-Chuck_Woolery_2004_cropped.jpg",
          difficulty: "easy"
        },
        {
          name: "Marsha Warfield",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://vignette3.wikia.nocookie.net/matchgame/images/6/68/Marsha-warfield-2-sized.jpg",
          difficulty: "hard"
        },
        {
          name: "David Faustino",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/ce/David_Faustino_2012.jpg",
          difficulty: "medium"
        },
        {
          name: "Renoly Santiago",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Renoly_Santiago_2011_RSJL_UKNY.jpg/1200px-Renoly_Santiago_2011_RSJL_UKNY.jpg",
          difficulty: "hard"
        },
        {
          name: "Tom Green",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tom_Green_2006_%28141261244%29_%28cropped%29.jpg/1200px-Tom_Green_2006_%28141261244%29_%28cropped%29.jpg",
          difficulty: "hard"
        },
        {
          name: "Ben Stein",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/0/03/Ben_Stein.jpg",
          difficulty: "medium"
        },
        {
          name: "Gilbert Gottfried",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gilbert_Gottfried_2016.jpg/1200px-Gilbert_Gottfried_2016.jpg",
          difficulty: "medium"
        },
        {
          name: "Tony Danza",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Tony_Danza.jpg",
          difficulty: "hard"
        },
        {
          name: "William Forsythe",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "http://vignette1.wikia.nocookie.net/thementalist/images/1/11/3d1a9bdfbc546b3eb45bf4e92befe548.jpg",
          difficulty: "hard"
        },
        {
          name: "Neve Campbell",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Neve_Campbell_04_%2821268333696%29.jpg/250px-Neve_Campbell_04_%2821268333696%29.jpg",
          difficulty: "hard"
        },
        {
          name: "Paul Reubens",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Paul_Reubens_SXSW_2016.jpg/1200px-Paul_Reubens_SXSW_2016.jpg",
          difficulty: "easy"
        },
        {
          name: "Lea Thompson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Lea_Thompson_February_2015_crop.JPG/1200px-Lea_Thompson_February_2015_crop.JPG",
          difficulty: "medium"
        },
        {
          name: "Gregory Hines",
          isAlive: 0,
          yearDied: 2003,
          ageDied: 51,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gregory_Hines_1993.jpg/1200px-Gregory_Hines_1993.jpg",
          difficulty: "medium"
        },
        {
          name: "Richard Griffiths",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 65,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/BAFTA_2007_%28387023768%29.jpg",
          difficulty: "hard"
        },
        {
          name: "John Spencer",
          isAlive: 0,
          yearDied: 2005,
          ageDied: 58,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/f/f3/JohnSpencer-_Actor.jpg",
          difficulty: "hard"
        },
        {
          name: "Paul Gleason",
          isAlive: 0,
          yearDied: 2006,
          ageDied: 67,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/fa/thumb/6/6c/Paul_Gleason_Breakfast_Club.jpg/220px-Paul_Gleason_Breakfast_Club.jpg",
          difficulty: "hard"
        },
        {
          name: "James Rebhorn",
          isAlive: 0,
          yearDied: 2014,
          ageDied: 65,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/James_Rebhorn_at_the_2009_Tribeca_Film_Festival.jpg/1200px-James_Rebhorn_at_the_2009_Tribeca_Film_Festival.jpg",
          difficulty: "hard"
        },
        {
          name: "Jonathan Taylor-Thomas",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Jonathan_Taylor_Thomas.jpg",
          difficulty: "easy"
        },
        {
          name: "Jason David Frank",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WW_Chicago_2014_-_Jason_David_Frank_01_%2815035617096%29.jpg/1200px-WW_Chicago_2014_-_Jason_David_Frank_01_%2815035617096%29.jpg",
          difficulty: "hard"
        },
        {
          name: "Mara Wilson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mara_Wilson_by_Gage_Skidmore.jpg/1200px-Mara_Wilson_by_Gage_Skidmore.jpg",
          difficulty: "hard"
        },
        {
          name: "Sean O'Neal",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Neal_McDonough_2015_(2).jpg/1200px-Neal_McDonough_2015_(2).jpg",
          difficulty: "hard"
        },
        {
          name: "Marla Sokoloff",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Marla_Sokoloff_%28cropped%29.jpg/225px-Marla_Sokoloff_%28cropped%29.jpg",
          difficulty: "hard"
        },
        {
          name: "Cara DeLizia",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "http://vignette2.wikia.nocookie.net/westwing/images/a/a0/CaraDeLizia.jpg/revision/latest?cb=20131007044700",
          difficulty: "hard"
        },
        {
          name: "Austin O'Brien",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://image.tmdb.org/t/p/w500/5K63RAJq6iwnOSM8ADpj9ARzIxq.jpg",
          difficulty: "hard"
        },
        {
          name: "Kimberly J. Brown",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kimberlin_Brown_Pelzer.jpg/240px-Kimberlin_Brown_Pelzer.jpg",
          difficulty: "hard"
        },
        {
          name: "Omri Katz",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://img.networthpost.com/thumbs/441809_omri-katz/441809_omri-katz_1.jpeg",
          difficulty: "hard"
        },
        {
          name: " Silvio Horta",
          isAlive: 0,
          yearDied: 2020,
          ageDied: 45,
          imageURL:
            "https://dailywikis.com/wp-content/uploads/2020/01/Silvio-Horta.jpg",
          difficulty: "hard"
        },
        {
          name: "Elizabeth Wurtzel",
          isAlive: 0,
          yearDied: 2020,
          ageDied: 52,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Elizabeth_Wurtzel_BBF_2010_Shankbone.jpg/220px-Elizabeth_Wurtzel_BBF_2010_Shankbone.jpg",
          difficulty: "hard"
        },
        {
          name: "John Witherspoon",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 77,
          imageURL:
            "https://celebritypictures.wiki/thumbs/0936762/0936762_7.jpeg",
          difficulty: "easy"
        },
        {
          name: "Eddie Money",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 70,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/EM02035cropped-1.jpg/1200px-EM02035cropped-1.jpg",
          difficulty: "medium"
        },
        {
          name: "Jahseh  Onfroy",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 20,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/XXXTENTACION_mugshot_12_28_2016.jpg/181px-XXXTENTACION_mugshot_12_28_2016.jpg",
          difficulty: "hard"
        },
        {
          name: "Verne Troyer",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 49,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/1/1a/Verne_Troyer_%282009%29.jpg",
          difficulty: "easy"
        },
        {
          name: "Jarad Higgins",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 21,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Juice_Wrld_Interview.png/195px-Juice_Wrld_Interview.png",
          difficulty: "medium"
        },
        {
          name: "Lil Peep",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 21,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lil_Peep_in_2016_by_Miller_Rodríguez_%28portrait_crop%29.jpg/250px-Lil_Peep_in_2016_by_Miller_Rodríguez_%28portrait_crop%29.jpg",
          difficulty: "hard"
        },
        {
          name: "Ryan Dunn",
          isAlive: 0,
          yearDied: 2011,
          ageDied: 34,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ryan_Dunn_Jackass_3D_London_Premiere_2.jpg/1200px-Ryan_Dunn_Jackass_3D_London_Premiere_2.jpg",
          difficulty: "medium"
        },
        {
          name: "Graham Chapman",
          isAlive: 0,
          yearDied: 1989,
          ageDied: 48,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/en/f/f7/Graham_Chapman_Portrait.png",
          difficulty: "medium"
        },
        {
          name: "John Cleese",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/John_Cleese_at_1989_Oscars.jpg/170px-John_Cleese_at_1989_Oscars.jpg",
          difficulty: "easy"
        },
        {
          name: "Terry Gilliam",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Terry_Gilliam.jpg/1200px-Terry_Gilliam.jpg",
          difficulty: "medium"
        },
        {
          name: "Michael Palin",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/7/75/Michael_Palin.jpg",
          difficulty: "medium"
        },
        {
          name: "Terry Jones",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/2/29/Pastor_Terry_Jones_before_the_March.jpg",
          difficulty: "medium"
        },
        {
          name: "Eric Idle",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eric_Idle_2014.jpg/1200px-Eric_Idle_2014.jpg",
          difficulty: "hard"
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
