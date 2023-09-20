import React, { useState, useEffect } from "react";
import axios from "axios";
import FilmTable from "./components/FilmTable";
import FilmDetail from "./components/FilmDetail";
import "./styles/App.css";

function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        setFilms(response.data.results);
        loadFavoritesFromLocalStorage(); // Load favorites from localStorage when the app starts
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }

    fetchFilms();
  }, []);

  useEffect(() => {
    saveFavoritesToLocalStorage(); // Save favorites to localStorage whenever the favorites list changes
  }, [favorites]);

  const handleFilmSelect = (film) => {
    setSelectedFilm(film);
  };

  const handleFavoriteToggle = (film) => {
    // Check if the film is already in favorites
    const isFavorite = favorites.includes(film.episode_id);

    if (isFavorite) {
      // Remove the film from favorites
      const updatedFavorites = favorites.filter((favFilmId) => favFilmId !== film.episode_id);
      setFavorites(updatedFavorites);
    } else {
      // Add the film to favorites
      setFavorites([...favorites, film.episode_id]);
    }
  };

  // Function to save favorites to localStorage
  const saveFavoritesToLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  // Function to load favorites from localStorage
  const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  return (
    <div className="app">
      <FilmTable films={films} onFilmSelect={handleFilmSelect} />
      <FilmDetail selectedFilm={selectedFilm} onFavoriteToggle={handleFavoriteToggle} favorites={favorites} />
    </div>
  );
}

export default App;
