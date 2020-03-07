const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost:27017/badmovies", { useNewUrlParser: true });
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to db...");
});

const movieSchema = new mongoose.Schema({
  poster_path: String,
  title: String,
  release_date: String,
  vote_average: Number
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports.db = db;
module.exports.Movie = Movie;
