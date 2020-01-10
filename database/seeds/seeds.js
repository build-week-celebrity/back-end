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
            "https://en.wikipedia.org/wiki/Chuck_Berry#/media/File:Chuck_Berry_1957.jpg",
          difficulty: "medium"
        },
        {
          name: "Paul McCartney",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Paul_McCartney#/media/File:Paul_McCartney_in_October_2018.jpg",
          difficulty: "easy"
        },
        {
          name: "Adam West",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 88,
          imageURL:
            "https://en.wikipedia.org/wiki/Adam_West#/media/File:Adam_West_by_Gage_Skidmore_3.jpg",
          difficulty: "easy"
        },
        {
          name: "David Hasselhoff",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/David_Hasselhoff#/media/File:Hoff_3.jpg",
          difficulty: "easy"
        },
        {
          name: "Dick Van Dyke",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Dick_Van_Dyke#/media/File:Dick_Van_Dyke_by_Gage_Skidmore.jpg",
          difficulty: "medium"
        },
        {
          name: "Roger Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 89,
          imageURL:
            "https://en.wikipedia.org/wiki/Roger_Moore#/media/File:Sir_Roger_Moore_3.jpg",
          difficulty: "medium"
        },
        {
          name: "Charlton Heston",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 84,
          imageURL:
            "https://en.wikipedia.org/wiki/Charlton_Heston#/media/File:CharltonHeston1981_2_crop.jpg",
          difficulty: "easy"
        },
        {
          name: "Leonard Nimoy",
          isAlive: 0,
          yearDied: 2015,
          ageDied: 83,
          imageURL:
            "https://en.wikipedia.org/wiki/Leonard_Nimoy#/media/File:Leonard_Nimoy_by_Gage_Skidmore.jpg",
          difficulty: "easy"
        },
        {
          name: "William Shatner",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL: "https://en.wikipedia.org/wiki/William_Shatner",
          difficulty: "easy"
        },
        {
          name: "Mary Tyler Moore",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 80,
          imageURL:
            "https://en.wikipedia.org/wiki/Mary_Tyler_Moore#/media/File:Mary_Tyler_Moore_Show_in_1977.jpg",
          difficulty: "hard"
        },
        {
          name: "Lucille Ball",
          isAlive: 0,
          yearDied: 1989,
          ageDied: 77,
          imageURL:
            "https://en.wikipedia.org/wiki/Lucille_Ball#/media/File:LDBALL1950s.jpg",
          difficulty: "hard"
        },
        {
          name: "Cindy Williams",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Cindy_Williams#/media/File:Cindy_Williams.JPG",
          difficulty: "medium"
        },
        {
          name: "Penny Marshall",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 75,
          imageURL:
            "https://en.wikipedia.org/wiki/Penny_Marshall#/media/File:Penny_Marshall_1976.jpg",
          difficulty: "easy"
        },
        {
          name: "Goldie Hawn",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Goldie_Hawn#/media/File:Goldie_Hawn_-_1978.jpg",
          difficulty: "easy"
        },
        {
          name: "Ted Danson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Ted_Danson#/media/File:'The_Good_Place'_cast_and_crew_visit_San_Diego_Comic_Con_for_a_panel_(43100198314)_(cropped).jpg",
          difficulty: "easy"
        },
        {
          name: "Brittany Murphy",
          isAlive: 0,
          yearDied: 2009,
          ageDied: 32,
          imageURL:
            "https://en.wikipedia.org/wiki/Brittany_Murphy#/media/File:Brittany_Murphy.jpg",
          difficulty: "hard"
        },
        {
          name: "Jonathan Brandis",
          isAlive: 0,
          yearDied: 2003,
          ageDied: 27,
          imageURL:
            "https://en.wikipedia.org/wiki/Jonathan_Brandis#/media/File:Jonathan_Brandis_Wiki.jpg",
          difficulty: "hard"
        },
        {
          name: "Brad Renfro",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 25,
          imageURL:
            "https://en.wikipedia.org/wiki/Brad_Renfro#/media/File:Brad_Renfro_in_Apt_Pupil.jpg",
          difficulty: "hard"
        },
        {
          name: "Chris Penn",
          isAlive: 0,
          yearDied: 2006,
          ageDied: 40,
          imageURL:
            "https://en.wikipedia.org/wiki/Chris_Penn#/media/File:Chris_Penn.jpg",
          difficulty: "hard"
        },
        {
          name: "Bernie Mac",
          isAlive: 0,
          yearDied: 2008,
          ageDied: 50,
          imageURL:
            "https://en.wikipedia.org/wiki/Bernie_Mac#/media/File:BernieMacSoulMenMarch08.jpg",
          difficulty: "easy"
        },
        {
          name: "Lee Thompson Young",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 29,
          imageURL:
            "https://en.wikipedia.org/wiki/Lee_Thompson_Young#/media/File:Lee_Thompson_Young.jpg",
          difficulty: "medium"
        },
        {
          name: "Dana Plato",
          isAlive: 0,
          yearDied: 1999,
          ageDied: 34,
          imageURL:
            'https://en.wikipedia.org/wiki/Dana_Plato#/media/File:Dana_Plato_on_the_set_of_television_show_"Diff\'rent_Strokes"_1983-03-09.jpg',
          difficulty: "hard"
        },
        {
          name: "Harold Ramis",
          isAlive: 0,
          yearDied: 2014,
          ageDied: 69,
          imageURL:
            "https://en.wikipedia.org/wiki/Harold_Ramis#/media/File:Harold_Ramis_Oct_2009.jpg",
          difficulty: "medium"
        },
        {
          name: "Dominique Dunne",
          isAlive: 0,
          yearDied: 1982,
          ageDied: 22,
          imageURL:
            "https://en.wikipedia.org/wiki/Dominique_Dunne#/media/File:Ellen_Griffin_Dunne_and_Dominique_Dunne.png",
          difficulty: "hard"
        },
        {
          name: "Lisa Robin Kelly",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 43,
          imageURL:
            "https://en.wikipedia.org/wiki/Lisa_Robin_Kelly#/media/File:Lisa_Robin_Kelly.jpg",
          difficulty: "hard"
        },
        {
          name: "James Avery",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 68,
          imageURL:
            "https://en.wikipedia.org/wiki/James_Avery_(actor)#/media/File:James_Avery.jpg",
          difficulty: "medium"
        },
        {
          name: "Michael Clarke Duncan",
          isAlive: 0,
          yearDied: 2012,
          ageDied: 54,
          imageURL:
            "https://en.wikipedia.org/wiki/Michael_Clarke_Duncan#/media/File:MichaelClarkeDuncanJan09.jpg",
          difficulty: "medium"
        },
        {
          name: "Michael Jackson",
          isAlive: 0,
          yearDied: 2009,
          ageDied: 50,
          imageURL:
            "https://en.wikipedia.org/wiki/Michael_Jackson#/media/File:Michael_Jackson_in_1988.jpg",
          difficulty: "easy"
        },
        {
          name: "Dana Carvey",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Dana_Carvey#/media/File:Dana_Carvey_at_the_Governor's_Ball_following_the_41st_Annual_Emmy_Awards_cropped.jpg",
          difficulty: "medium"
        },
        {
          name: "Pauly Shore",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Pauly_Shore#/media/File:Pauly_Shore_is_Dead_Red_Carpet.jpg",
          difficulty: "medium"
        },
        {
          name: "Bob Newhart",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Bob_Newhart#/media/File:Comedian_Bob_Newhart.jpg",
          difficulty: "medium"
        },
        {
          name: "Rick Moranis",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Rick_Moranis#/media/File:Rick_Moranis_at_the_62nd_Academy_Awards.jpg",
          difficulty: "easy"
        },
        {
          name: "Doris Day",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 97,
          imageURL:
            "https://en.wikipedia.org/wiki/Doris_Day#/media/File:Doris_Day_-_1957.JPG",
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
            "https://en.wikipedia.org/wiki/Kristoff_St._John#/media/File:Kristoff_St._John_(46716837661).jpg",
          difficulty: "hard"
        },
        {
          name: "Luke Perry",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 52,
          imageURL:
            "https://en.wikipedia.org/wiki/Luke_Perry#/media/File:Luke_Perry_by_Gage_Skidmore_2.jpg",
          difficulty: "easy"
        },
        {
          name: "Nipsey Hussle",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 29,
          imageURL:
            "https://en.wikipedia.org/wiki/Nipsey_Hussle#/media/File:Soundtrack_Beat_Battle_Judging_Panel_March2011_(cropped).jpg",
          difficulty: "medium"
        },
        {
          name: "Danny Aiello",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 86,
          imageURL:
            "https://en.wikipedia.org/wiki/Danny_Aiello#/media/File:Danny_Aiello.jpg",
          difficulty: "medium"
        },
        {
          name: "Caroll Spinney",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 85,
          imageURL:
            "https://en.wikipedia.org/wiki/Caroll_Spinney#/media/File:Carroll_Spinney_2014.jpg",
          difficulty: "medium"
        },
        {
          name: "Rip Torn",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 88,
          imageURL:
            "https://en.wikipedia.org/wiki/Rip_Torn#/media/File:Rip_Torn_at_the_46th_Emmy_Awards_headcrop.jpg",
          difficulty: "medium"
        },
        {
          name: "Sinbad",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Sinbad_(comedian)#/media/File:Entertainer_Sinbad.jpg",
          difficulty: "easy"
        },
        {
          name: "Jaleel White",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Jaleel_White#/media/File:JaleelWhiteDec10.jpg",
          difficulty: "easy"
        },
        {
          name: "Bronson Pinchot",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Bronson_Pinchot#/media/File:Bronson_Pinchot_2012.jpg",
          difficulty: "hard"
        },
        {
          name: "Stephen Collins",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Stephen_Collins#/media/File:Stephen_Collins_2014.jpg",
          difficulty: "medium"
        },
        {
          name: "Chuck Woolery",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Chuck_Woolery#/media/File:Chuck_Woolery_2004.jpg",
          difficulty: "easy"
        },
        {
          name: "Marsha Warfield",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://www.imdb.com/name/nm0912201/mediaviewer/rm192275712",
          difficulty: "hard"
        },
        {
          name: "David Faustino",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/David_Faustino#/media/File:David_Faustino_by_Gage_Skidmore.jpg",
          difficulty: "medium"
        },
        {
          name: "Renoly Santiago",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Renoly_Santiago#/media/File:Renoly_Santiago_2011_RSJL_UKNY.jpg",
          difficulty: "hard"
        },
        {
          name: "Tom Green",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Tom_Green#/media/File:Tom_Green_stand-up_2013_(cropped).jpg",
          difficulty: "hard"
        },
        {
          name: "Ben Stein",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Ben_Stein#/media/File:Actor_Ben_Stein.jpg",
          difficulty: "medium"
        },
        {
          name: "Gilbert Gottfried",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Gilbert_Gottfried#/media/File:Gilbert_Gottfried_2016.jpg",
          difficulty: "medium"
        },
        {
          name: "Tony Danza",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL: "https://en.wikipedia.org/wiki/Tony_Danza",
          difficulty: "hard"
        },
        {
          name: "William Forsythe",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/William_Forsythe_(actor)#/media/File:Forsythe.jpg",
          difficulty: "hard"
        },
        {
          name: "Neve Campbell",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Neve_Campbell#/media/File:Neve_Campbell_04_(21268333696).jpg",
          difficulty: "hard"
        },
        {
          name: "Paul Reubens",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Paul_Reubens#/media/File:Paul_Reubens_by_Gage_Skidmore.jpg",
          difficulty: "easy"
        },
        {
          name: "Lea Thompson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Lea_Thompson#/media/File:Lea_Thompson_February_2015_crop.JPG",
          difficulty: "medium"
        },
        {
          name: "Gregory Hines",
          isAlive: 0,
          yearDied: 2003,
          ageDied: 51,
          imageURL:
            "https://en.wikipedia.org/wiki/Gregory_Hines#/media/File:Gregory_Hines_1993.jpg",
          difficulty: "medium"
        },
        {
          name: "Richard Griffiths",
          isAlive: 0,
          yearDied: 2013,
          ageDied: 65,
          imageURL:
            "https://en.wikipedia.org/wiki/Richard_Griffiths#/media/File:BAFTA_2007_(387023768).jpg",
          difficulty: "hard"
        },
        {
          name: "John Spencer",
          isAlive: 0,
          yearDied: 2005,
          ageDied: 58,
          imageURL:
            "https://en.wikipedia.org/wiki/John_Spencer_(actor)#/media/File:JohnSpencer-_Actor.jpg",
          difficulty: "hard"
        },
        {
          name: "Paul Gleason",
          isAlive: 0,
          yearDied: 2006,
          ageDied: 67,
          imageURL:
            "https://en.wikipedia.org/wiki/Paul_Gleason#/media/File:Paul_Gleason.jpg",
          difficulty: "hard"
        },
        {
          name: "James Rebhorn",
          isAlive: 0,
          yearDied: 2014,
          ageDied: 65,
          imageURL:
            "https://en.wikipedia.org/wiki/James_Rebhorn#/media/File:James_Rebhorn_at_the_2009_Tribeca_Film_Festival.jpg",
          difficulty: "hard"
        },
        {
          name: "Jonathan Taylor-Thomas",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Jonathan_Taylor_Thomas#/media/File:Jonathan_Taylor_Thomas.jpg",
          difficulty: "easy"
        },
        {
          name: "Jason David Frank",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Jason_David_Frank#/media/File:6.28.13JasonDavidFrankByLuigiNovi1.jpg",
          difficulty: "hard"
        },
        {
          name: "Mara Wilson",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Mara_Wilson#/media/File:Mara_Wilson_(24515555898).jpg",
          difficulty: "hard"
        },
        {
          name: "Sean O'Neal",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://www.imdb.com/name/nm0641941/mediaviewer/rm4252090624",
          difficulty: "hard"
        },
        {
          name: "Marla Sokoloff",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/Marla_Sokoloff#/media/File:Marla_Sokoloff_(cropped).jpg",
          difficulty: "hard"
        },
        {
          name: "Cara DeLizia",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://www.imdb.com/name/nm0217240/mediaviewer/rm343710976",
          difficulty: "hard"
        },
        {
          name: "Austin O'Brien",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://www.imdb.com/name/nm0639432/mediaviewer/rm370318592",
          difficulty: "hard"
        },
        {
          name: "Kimberly J. Brown",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://www.imdb.com/name/nm0004782/mediaviewer/rm4095628032",
          difficulty: "hard"
        },
        {
          name: "Omri Katz",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://www.imdb.com/name/nm0441814/mediaviewer/rm3156577792",
          difficulty: "hard"
        },
        {
          name: " Silvio Horta",
          isAlive: 0,
          yearDied: 2020,
          ageDied: 45,
          imageURL:
            "https://www.imdb.com/name/nm0395531/mediaviewer/rm2503311617",
          difficulty: "hard"
        },
        {
          name: "Elizabeth Wurtzel",
          isAlive: 0,
          yearDied: 2020,
          ageDied: 52,
          imageURL:
            "https://en.wikipedia.org/wiki/Elizabeth_Wurtzel#/media/File:Elizabeth_Wurtzel_BBF_2010_Shankbone.jpg",
          difficulty: "hard"
        },
        {
          name: "John Witherspoon",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 77,
          imageURL:
            "https://en.wikipedia.org/wiki/John_Witherspoon_(actor)#/media/File:JohnWithersppon2019_(Cropped).png",
          difficulty: "easy"
        },
        {
          name: "Eddie Money",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 70,
          imageURL:
            "https://en.wikipedia.org/wiki/Eddie_Money#/media/File:Eddie_Money-276_(Cropped).jpg",
          difficulty: "medium"
        },
        {
          name: "Jahseh  Onfroy",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 20,
          imageURL:
            "https://en.wikipedia.org/wiki/XXXTentacion#/media/File:Xxxtentacion_mugshot.jpg",
          difficulty: "hard"
        },
        {
          name: "Verne Troyer",
          isAlive: 0,
          yearDied: 2018,
          ageDied: 49,
          imageURL:
            "https://en.wikipedia.org/wiki/Verne_Troyer#/media/File:Verne_Troyer_Chiller_Theatre_Expo.jpg",
          difficulty: "easy"
        },
        {
          name: "Jarad Higgins",
          isAlive: 0,
          yearDied: 2019,
          ageDied: 21,
          imageURL:
            "https://en.wikipedia.org/wiki/Juice_Wrld#/media/File:Juice_Wrld_Interview.png",
          difficulty: "medium"
        },
        {
          name: "Gustav Elijah Ahr\n",
          isAlive: 0,
          yearDied: 2017,
          ageDied: 21,
          imageURL:
            "https://en.wikipedia.org/wiki/Lil_Peep#/media/File:Lil-Peep_PrettyPuke_Photoshoot.png",
          difficulty: "hard"
        },
        {
          name: "Ryan Dunn",
          isAlive: 0,
          yearDied: 2011,
          ageDied: 34,
          imageURL:
            "https://en.wikipedia.org/wiki/Ryan_Dunn#/media/File:Ryan_Dunn_Jackass_3D_London_Premiere_2.jpg",
          difficulty: "medium"
        },
        {
          name: "Graham Chapman",
          isAlive: 0,
          yearDied: 1989,
          ageDied: 48,
          imageURL:
            "https://en.wikipedia.org/wiki/File:Graham_Chapman_Portrait.png",
          difficulty: "medium"
        },
        {
          name: "John Cleese",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/File:John_Cleese_2008_bigger_crop.jpg",
          difficulty: "easy"
        },
        {
          name: "Terry Gilliam",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL: "https://en.wikipedia.org/wiki/File:Terry_Gilliam.jpg",
          difficulty: "medium"
        },
        {
          name: "Michael Palin",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/File:An_evening_with_Michael_Palin.jpg",
          difficulty: "medium"
        },
        {
          name: "Terry Jones",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL:
            "https://en.wikipedia.org/wiki/File:Terry_Jones_Monty_Python_O2_Arena_(cropped).jpg",
          difficulty: "medium"
        },
        {
          name: "Eric Idle",
          isAlive: 1,
          yearDied: null,
          ageDied: null,
          imageURL: "https://en.wikipedia.org/wiki/File:Eric_Idle_2014.jpg",
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
