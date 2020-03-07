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
          popularity: 2.702,
          vote_count: 2,
          video: false,
          poster_path: "/oAWXjjGTrkrdAlSeGGq0IZOwFoF.jpg",
          id: 448503,
          adult: false,
          backdrop_path: "/g1btrWDoWMOl41axD9M2YgpZdve.jpg",
          original_language: "mr",
          original_title: "उन्मत्त",
          genre_ids: [28, 27, 878, 53],
          title: "Unmatta",
          vote_average: 0,
          overview:
            "“Unmatta” is an upcoming Marathi sci-fi action thriller produced by “24FS Chitra”. It is a story of five students who invent a new kind of hallucination drug and experiment with it. It has twisted story-line with lot of action and special effects.",
          release_date: "2019-02-22"
        },
        {
          popularity: 0.6,
          id: 344490,
          video: false,
          vote_count: 2,
          vote_average: 0,
          title: "Webcam",
          release_date: "2012-07-27",
          original_language: "en",
          original_title: "Webcam",
          genre_ids: [53, 27],
          backdrop_path: null,
          adult: false,
          overview:
            '"Webcam" is based on actual events and was shot entirely on a computer\'s webcam. The filmmakers hope that it will make people think more about the technology that we use every day and the effects it can have on all of us.',
          poster_path: "/oAWXjjGTrkrdAlSeGGq0IZOwFoF.jpg"
        },
        {
          popularity: 1.175,
          id: 331827,
          video: false,
          vote_count: 2,
          vote_average: 0,
          title: "Rouge Fougère",
          release_date: "2015-06-05",
          original_language: "en",
          original_title: "Rouge Fougère",
          genre_ids: [27, 10402, 878],
          backdrop_path: null,
          adult: false,
          overview:
            "A group of survivors is looking for medicine in a toxic world. Addicted, mankind fells down in its darkest hour. As the team's reserves are dwindling, a new threat appears. Will survivors cope one last time?",
          poster_path: "/oAWXjjGTrkrdAlSeGGq0IZOwFoF.jpg"
        }
      ],
      favorites: [
        {
          popularity: 2.702,
          vote_count: 2,
          video: false,
          poster_path: "/oAWXjjGTrkrdAlSeGGq0IZOwFoF.jpg",
          id: 448503,
          adult: false,
          backdrop_path: "/g1btrWDoWMOl41axD9M2YgpZdve.jpg",
          original_language: "mr",
          original_title: "उन्मत्त",
          genre_ids: [28, 27, 878, 53],
          title: "FAVORITE Unmatta",
          vote_average: 0,
          overview:
            "“Unmatta” is an upcoming Marathi sci-fi action thriller produced by “24FS Chitra”. It is a story of five students who invent a new kind of hallucination drug and experiment with it. It has twisted story-line with lot of action and special effects.",
          release_date: "2019-02-22"
        },
        {
          popularity: 0.6,
          id: 344490,
          video: false,
          vote_count: 2,
          vote_average: 0,
          title: "FAVORITE Webcam",
          release_date: "2012-07-27",
          original_language: "en",
          original_title: "Webcam",
          genre_ids: [53, 27],
          backdrop_path: null,
          adult: false,
          overview:
            '"Webcam" is based on actual events and was shot entirely on a computer\'s webcam. The filmmakers hope that it will make people think more about the technology that we use every day and the effects it can have on all of us.',
          poster_path: "/oAWXjjGTrkrdAlSeGGq0IZOwFoF.jpg"
        },
        {
          popularity: 1.175,
          id: 331827,
          video: false,
          vote_count: 2,
          vote_average: 0,
          title: "FAVORITE Rouge Fougère",
          release_date: "2015-06-05",
          original_language: "en",
          original_title: "Rouge Fougère",
          genre_ids: [27, 10402, 878],
          backdrop_path: null,
          adult: false,
          overview:
            "A group of survivors is looking for medicine in a toxic world. Addicted, mankind fells down in its darkest hour. As the team's reserves are dwindling, a new threat appears. Will survivors cope one last time?",
          poster_path: "/oAWXjjGTrkrdAlSeGGq0IZOwFoF.jpg"
        }
      ],
      showFaves: false
    };

    // you might have to do something important here!
    this.updateMovies = this.updateMovies.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  updateMovies(movieList) {
    this.setState({ movies: movieList });
  }

  componentDidMount() {
    // this.getMovies();
  }

  getMovies(id) {
    let config = {
      method: "GET",
      url: "/movies/search",
      params: { id: id }
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
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
            updateMovies={this.updateMovies}
          />
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
