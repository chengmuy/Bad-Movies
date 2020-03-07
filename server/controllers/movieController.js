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
    movieModel
      .addMovie(req.body)
      .then(() => res.sendStatus(201))
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  deleteMovie: (req, res) => {
    movieModel
      .deleteMovie(req.query)
      // .tap(res => console.log(res))
      .then(({ n }) => (n === 1 ? res.sendStatus(202) : res.sendStatus(200)))
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};
