const movieModel = require("../models/movieModel.js");
const tmdbApi = require("../helpers/apiHelpers.js");

//Return requests to the client
module.exports = {
  getGenres: (req, res) => {
    tmdbApi
      .getGenres()
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  getSearch: (req, res) => {
    tmdbApi
      .getSearch(req.query.id)
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  saveMovie: (req, res) => {
    //save movie as favorite into the database
  },
  deleteMovie: (req, res) => {
    //remove movie from favorites into the database
  }
};
