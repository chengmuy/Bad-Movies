import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      value: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  getGenres() {
    let config = {
      method: "GET",
      url: "/movies/genres"
    };
    return axios(config)
      .then(({ data }) => data)
      .then(({ genres }) => genres);
  }

  componentDidMount() {
    this.getGenres()
      .then(genres => this.setState({ genres }))
      .then(() => this.setState({ value: this.state.genres[0].id }))
      .then(() => this.props.getMovies(this.state.value))
      .then(this.props.updateMovies);
  }

  handleSearch() {
    console.log("handling search");
    this.props.getMovies(this.state.value).then(this.props.updateMovies);
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />

        <select value={this.state.value} onChange={e => this.setState({ value: Number(e.target.value) })}>
          {this.state.genres.map(({ name, id }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
        <br />
        <br />

        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
