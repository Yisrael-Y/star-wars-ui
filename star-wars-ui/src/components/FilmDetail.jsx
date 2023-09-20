import React from "react";
import "../styles/FilmDetail.css";

const FilmDetail = ({ selectedFilm, onFavoriteToggle, favorites }) => {
  const isFavorite = favorites.some((film) => film === selectedFilm.episode_id);

  return (
    <div className="film-detail">
      {selectedFilm ? (
        <>
          <h2>{selectedFilm.title}</h2>
          <p>{selectedFilm.opening_crawl}</p>
          <button className={isFavorite ? "favorite" : ""} onClick={() => onFavoriteToggle(selectedFilm)}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </>
      ) : (
        <p>Select a film from the table to see details.</p>
      )}
    </div>
  );
};

export default FilmDetail;
