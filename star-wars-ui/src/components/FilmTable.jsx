import React from "react";
import "../styles/FilmTable.css";

const FilmTable = ({ films, onFilmSelect }) => {
  return (
    <div className="film-table">
      <h2>Star Wars Films</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <tr key={film.episode_id}>
              <td onClick={() => onFilmSelect(film)}>{film.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmTable;
