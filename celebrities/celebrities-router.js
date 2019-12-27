const router = require("express").Router();

const celebs = [
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
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hoff_3.jpg"
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
  }
];
router.get("/", (req, res) => {});

module.exports = router;
