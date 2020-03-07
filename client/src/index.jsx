import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import $ from "jquery";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false
    };

    // you might have to do something important here!
    this.updateFavorites = this.updateFavorites.bind(this);
    this.updateMovies = this.updateMovies.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  updateMovies(movieList) {
    this.setState({ movies: movieList });
  }

  updateFavorites(favoriteList) {
    this.setState({ favorites: favoriteList });
  }

  componentDidMount() {
    this.getFavorites().then(this.updateFavorites);
  }

  getMovies(id) {
    let config = {
      method: "GET",
      url: "/movies/search",
      params: { id: id }
    };
    return axios(config).then(resp => resp.data.results);
  }

  getFavorites() {
    const config = {
      url: "/movies/favorites"
    };
    return axios(config).then(resp => resp.data.favorites);
  }

  saveMovie(movie) {
    // same as above but do something diff
    let config = {
      method: "POST",
      url: "/movies/save",
      data: movie
    };

    console.log("saveMovie movie >> ", movie);

    // axios(config).then(({ data: movieObj }) => this.updateFavorites([...this.state.favorites, movieObj]));
    return axios(config)
      .then(this.getFavorites)
      .then(this.updateFavorites);
  }

  deleteMovie(id) {
    // same as above but do something diff
    let config = {
      method: "DELETE",
      url: "/movies/delete",
      params: { id }
    };
    return axios(config)
      .then(this.getFavorites)
      .then(this.updateFavorites);
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
            updateMovies={this.updateMovies}
          />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
