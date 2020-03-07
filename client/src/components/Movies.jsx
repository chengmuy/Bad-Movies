import React from "react";
import Movie from "./Movie.jsx";

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map(movie => (
          <Movie
            key={movie.id}
            {...movie}
            clickHandler={() => (this.props.showFaves ? this.props.deleteMovie(movie.id) : this.props.saveMovie(movie))}
          />
        ))}
      </ul>
    );
  }
}

export default Movies;
