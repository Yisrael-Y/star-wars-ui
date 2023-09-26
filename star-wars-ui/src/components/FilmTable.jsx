// Import React and component-specific styles
import React from "react";
import "../styles/FilmTable.css";

// Define the FilmTable component
const FilmTable = ({ films, handleFilmSelect }) => {
  // Render the component
  return (
    <div className="film-table">
      {/* Display the heading */}
      <h2>Films</h2>

      {/* Film table */}
      <div className="film-table table">
        {/* Map through films and display each film */}
        {films.map((film) => (
          <div className="table-row" key={film.episode_id}>
            {/* Clickable film title to trigger film selection */}
            <div
              className="film-row-details"
              onClick={() => handleFilmSelect(film)}
            >
              {film.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmTable;
