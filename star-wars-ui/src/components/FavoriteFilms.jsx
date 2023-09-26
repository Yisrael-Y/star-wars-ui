// Import necessary modules and styles
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/FavoriteFilms.css";

// Define the FavoriteFilms component
const FavoriteFilms = ({ favorites, handleFilmSelect, isLoading }) => {
  // State variables for storing film names and hamburger menu status
  const [filmNames, setFilmNames] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // Effect to fetch and display film names when favorites change
  useEffect(() => {
    console.log(`favorites component : ${favorites}}`);

    const fetchFilmNames = async () => {
      if (!favorites || favorites.length === 0) {
        return; // No favorite films, nothing to fetch
      }

      // Create an array of promises to fetch film names
      const filmNamePromises = favorites.map(async (filmId) => {
        console.log(`fetching film with ID ${filmId}`);
        try {
          const response = await axios.get(
            `https://swapi.dev/api/films/${filmId}`
          );
          return response.data;
        } catch (error) {
          console.error(`Error fetching film with ID ${filmId}:`, error);
          return "Unknown Title"; // Fallback if fetching fails
        }
      });

      // Wait for all promises to resolve and set film names
      const names = await Promise.all(filmNamePromises);
      setFilmNames(names);
    };

    // Call the fetchFilmNames function when favorites change
    fetchFilmNames();
  }, [favorites]);

  // Function to handle a click on a favorite film
  const handleFavoriteClick = (film) => {
    console.log(film);
    handleFilmSelect(film);
    setHamburgerOpen(false); // Close the hamburger menu after selection
  };

  // Render the component
  return (
    <>
      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleHamburger}>
        <div
          className={!hamburgerOpen ? "hamburger-line" : "hamburger-line line1"}
        ></div>
        <div
          className={!hamburgerOpen ? "hamburger-line" : "hamburger-line line3"}
        ></div>
      </div>

      {/* Hamburger menu */}
      <ul className={`hamburger-menu ${hamburgerOpen ? "slideIn" : "slideOut"}`}>
        {filmNames.length > 0 ? (
          <>
            <h3 className="favorite-films-list-header">Favorite films</h3>
            {filmNames.map((film) => (
              <li
                className="favorite-films-list-item"
                key={film.episode_id}
                onClick={() => handleFavoriteClick(film)}
              >
                {film.title}
              </li>
            ))}
          </>
        ) : (
          <h3 className="favorite-films-list-item">
            No favorite films selected
          </h3>
        )}
      </ul>
    </>
  );
};

export default FavoriteFilms;
