import React from "react";
import "../styles/FilmTable.css";

const FilmTable = ({ films, handleFilmSelect }) => {
  return (
    <div className="film-table">
      <h2>Films</h2>
      <div className="film-table table">

          {films.map((film) => (
            <div className="table-row" key={film.episode_id}>
              <div className="film-row-details" onClick={() => handleFilmSelect(film)}>{film.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilmTable;
