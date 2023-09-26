// Import React and component-specific styles
import React from "react";
import "../styles/FilmDetail.css";

// Define the FilmDetail component
const FilmDetail = ({ selectedFilm, onFavoriteToggle, favorites }) => {
  // Check if the selected film is a favorite
  const isFavorite = favorites.some((film) => film === selectedFilm.episode_id);

  // Render the component
  return (
    <div className="film-detail">
      {selectedFilm ? (
        <>
          {/* Display film title */}
          <h2>{selectedFilm.title}</h2>

          {/* Film details section */}
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

          {/* Display film opening crawl */}
          <p className="film-opening-crawl">
            {selectedFilm.opening_crawl}
          </p>

          {/* Favorite button */}
          <button
            className={isFavorite ? "favorite" : ""}
            onClick={() => onFavoriteToggle(selectedFilm)}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </>
      ) : (
        // Message to select a film if none is selected
        <h2>Select a film from the table to see details</h2>
      )}
    </div>
  );
};

export default FilmDetail;
