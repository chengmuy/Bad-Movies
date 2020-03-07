const request = require("request");
const axios = require("axios");
const { API_KEY } = require("../../config.js");

const TMDB_URL = "https://api.themoviedb.org/3";

// write out logic/functions required to query TheMovieDB.org
module.exports.getGenres = () => {
  let config = { params: { api_key: API_KEY } };
  return axios.get(TMDB_URL + "/genre/movie/list", config).then(({ data }) => data);
};

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file
// Don't forget to export your functions and require them within your server file
