//Select one db to work with:

//For Mongo
const { db, Movie } = require("../../db/mongodb");

module.exports = {
  addMovie: movieObj => Movie.findOneAndUpdate({ id: movieObj.id }, movieObj, { upsert: true, new: true }).exec(),

  deleteMovie: ({ id }) => Movie.deleteOne({ id }).exec(),

  getAllMovies: () => Movie.find({}).exec()
};

// module.exports
//   .addMovie({
//     id: 102,
//     poster_path: "poster path",
//     title: "bad movie title",
//     release_date: "80s",
//     vote_average: 2.2
//   })
//   .then(res => console.log(res));

// module.exports.deleteMovie({ id: 101 }).then(res => console.log(res));
