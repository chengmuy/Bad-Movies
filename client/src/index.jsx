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
      movies: [
        {
          popularity: 3.634,
          id: 464001,
          video: false,
          vote_count: 11,
          vote_average: 0.4,
          title: "The Wake",
          release_date: "2019-10-10",
          original_language: "en",
          original_title: "The Wake",
          genre_ids: [27],
          backdrop_path: "/r1zkXclXRldtzTqg6wM7e0X7Sqy.jpg",
          adult: false,
          overview:
            "A group of friends attend the wake of a child they accidentally killed with their car. Once at the wake, they find themselves trapped and stalked by a masked assailant.",
          poster_path: "/73QJi3atWyro0nOXUGXRhvLsMgi.jpg"
        },
        {
          popularity: 0.6,
          id: 346560,
          video: false,
          vote_count: 6,
          vote_average: 0,
          title: "Legend of Dark Rider",
          release_date: "2016-08-09",
          original_language: "en",
          original_title: "Legend of Dark Rider",
          genre_ids: [14, 27],
          backdrop_path: "/rGbqajpIGKFmmXAk1fAs5HC4fm5.jpg",
          adult: false,
          overview:
            'A story that has lasted for generations, about the Dark Rider. A beast none has survived, a monster, not human. In time the story becomes legend, but the man they call Dark Rider is a man with no memory carrying a silver locket shaped like the head of a wolf. When threaten it unleashes a dark power in him and slays whoever stands in his way. All he can remember is waking up on the bottom of a cliff with his right eye torn out by the blade of an axe, holding this locket. Beside him lays a dead beautiful woman he assumes it\'s his wife, all he has is the name "Vladimir" written on a piece of fabric. Every night he is hunted by a vision of a man part snake sitting on a golden throne screaming "Give it back to me". He travels the snowy north, looking for the man Vladimir in hope that this man can finally tell him who he is, what he is and take his revenge.',
          poster_path: "/cJXVSlB8pNSNpSx1zQlaNoRvVFp.jpg"
        },
        {
          popularity: 1.019,
          id: 519022,
          video: false,
          vote_count: 3,
          vote_average: 0,
          title: "Disposition",
          release_date: "2018-10-13",
          original_language: "en",
          original_title: "Disposition",
          genre_ids: [27],
          backdrop_path: null,
          adult: false,
          overview: "A woman stalked by depression makes some extreme decisions.",
          poster_path: "/6YNltGD5DL97qjRiDgMoU7YXHuZ.jpg"
        }
      ],
      favorites: [{ deway: "favorites" }],
      showFaves: false
    };

    // you might have to do something important here!
  }

  getMovies({ id }) {
    let config = {
      method: "GET",
      url: "/movies/search",
      params: { id }
    };
    return axios(config);
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
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
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
