import React from "react";
import "../styles/FilmDetail.css";

const FilmDetail = ({ selectedFilm, onFavoriteToggle, favorites }) => {
  const isFavorite = favorites.some((film) => film === selectedFilm.episode_id);


  return (
    <div className="film-detail">
      {selectedFilm ? (
        <>
          <h2>{selectedFilm.title}</h2>
          <div className="selectedFilmDetails">
            <div className="film-detail-item">
              <div className="film-detail-title">Director:</div>{" "}
              <div className="film-detail-content">{selectedFilm.director}</div>
            </div>
            <div className="film-detail-item">
              <div className="film-detail-title">Producer:</div>{" "}
              <div className="film-detail-content">{selectedFilm.producer}</div>
            </div>
            <div className="film-detail-item">
              <div className="film-detail-title">Release Date:</div>{" "}
              <div className="film-detail-content">
                {selectedFilm.release_date}
              </div>
            </div>
          </div>
          <p className="film-opening-crawl">
            {selectedFilm.opening_crawl}
          </p>
          <button
            className={isFavorite ? "favorite" : ""}
            onClick={() => onFavoriteToggle(selectedFilm)}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </>
      ) : (
        <h2>Select a film from the table to see details</h2>
      )}
    </div>
  );
};

export default FilmDetail;
