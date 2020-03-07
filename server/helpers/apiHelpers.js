const request = require("request");
const axios = require("axios");
const { API_KEY } = require("../../config.js");

const TMDB_URL = "https://api.themoviedb.org/3";

module.exports.getGenres = () => {
  let config = {
    url: "genre/movie/list",
    baseURL: TMDB_URL,
    params: { api_key: API_KEY }
  };
  return axios.get(TMDB_URL + "/genre/movie/list", config).then(({ data }) => data);
};

module.exports.getSearch = ({ id }) => {
  let config = {
    method: "GET",
    url: "/discover/movie",
    baseURL: TMDB_URL,
    params: {
      api_key: API_KEY,
      sort_by: "vote_average.asc",
      include_adult: true,
      with_genres: id
    }
  };
  return axios(config).then(({ data }) => data);
};
