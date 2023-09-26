import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/FavoriteFilms.css";

const FavoriteFilms = ({ favorites, handleFilmSelect }) => {
  const [filmNames, setFilmNames] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    console.log(`favorites component : ${favorites}}`);

    const fetchFilmNames = async () => {
      if (!favorites || favorites.length === 0) {
        return; // No favorite films, nothing to fetch
      }

      const filmNamePromises = favorites.map(async (filmId) => {
        try {
          const response = await axios.get(
            `https://swapi.dev/api/films/${filmId}`
          );
          return response.data;
        } catch (error) {
          console.error(`Error fetching film with ID ${filmId}:`, error);
          return "Unknown Title"; // Handle the error gracefully
        }
      });

      const names = await Promise.all(filmNamePromises);
      setFilmNames( names);
    };

    fetchFilmNames();
  }, [favorites]);

  const handleFavoriteClick = (film) => {
    console.log(film);
    handleFilmSelect(film)
    setHamburgerOpen(false);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleHamburger}>
        <div
          className={!hamburgerOpen ? "hamburger-line" : "hamburger-line line1"}
        ></div>
        <div
          className={!hamburgerOpen ? "hamburger-line" : "hamburger-line line3"}
        ></div>
      </div>
      <ul className={`hamburger-menu ${hamburgerOpen ? "slideIn" : "slideOut"}`}>
        {filmNames.length > 0 ? (
          <>
          
            <li className="favorite-films-list-item">Favorite films</li>
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
          <li className="favorite-films-list-item">
            No favorite films selected.
          </li>
        )}
      </ul>
    </>
  );
};

export default FavoriteFilms;
