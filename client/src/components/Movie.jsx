import React from "react";

const Movie = ({ poster_path, title, release_date, vote_average, clickHandler }) => (
  <li className="movie_item" onClick={clickHandler}>
    {poster_path && <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} />}
    <div className="movie_description">
      <h2>{title}</h2>
      <section className="movie_details">
        <div className="movie_year">
          <span className="title">Year</span>
          <span>{release_date.split("-")[0]}</span>
        </div>
        <div className="movie_rating">
          <span className="title">Rating</span>
          <span>{vote_average}</span>
        </div>
      </section>
    </div>
  </li>
);

export default Movie;
