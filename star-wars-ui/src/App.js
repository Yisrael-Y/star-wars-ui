import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import FilmTable from "./components/FilmTable";
import FilmDetail from "./components/FilmDetail";
import "./styles/App.css";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import StarWarsLoader from "./components/StarWarsLoader";
import FavoriteFilms from "./components/FavoriteFilms";

function App() {
  // State variables for managing data and application state
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showWelcomePage, setShowWelcomePage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Effect to fetch films from the API on initial render
  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        setFilms(response.data.results);
        setIsLoading(false); // Set loading to false when data is fetched
        loadFavoritesFromLocalStorage(); // Load favorites from localStorage when the app starts
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }

    fetchFilms();
  }, []);

  // Effect to manage audio playback
  useEffect(() => {
    // Event listener to start the animation when the audio ends
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      // Clean up the event listener when the component unmounts
      audioRef.current.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, []);

  // Effect to save favorites to local storage whenever the favorites list changes
  useEffect(() => {
    saveFavoritesToLocalStorage();
    console.log(`favorites updated : ${favorites}}`);
  }, [favorites]);

  // Function to handle film selection
  const handleFilmSelect = (film) => {
    setSelectedFilm(film);
  };

  // Function to toggle a film as a favorite
  const handleFavoriteToggle = (film) => {
    // Check if the film is already in favorites
    const isFavorite = favorites.includes(film.episode_id);
    console.log(`isFavorite : ${isFavorite}`);
    if (isFavorite) {
      // Remove the film from favorites
      const updatedFavorites = favorites.filter(
        (favFilmId) => favFilmId !== film.episode_id
      );
      setFavorites(updatedFavorites);
    } else {
      // Add the film to favorites
      setFavorites([...favorites, film.episode_id]);
    }
  };

  // Function to save favorites to local storage
  const saveFavoritesToLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  // Function to load favorites from local storage
  const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  // Function to toggle audio playback
  const handleToggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        // Set the desired starting point (10 seconds)
        audioElement.currentTime = 10;
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="app">
      <Header
        handleToggleAudio={handleToggleAudio}
        isPlaying={isPlaying}
        setShowWelcomePage={setShowWelcomePage}
        showWelcomePage={showWelcomePage}
        favorites={favorites}
        handleFilmSelect={handleFilmSelect}
      />
      {showWelcomePage ? (
        <WelcomePage
          setShowWelcomePage={setShowWelcomePage}
          handleToggleAudio={handleToggleAudio}
        />
      ) : (
        <div className="mainPage">
          {isLoading ? (
            <StarWarsLoader />
          ) : (
            <>
              <FilmTable films={films} handleFilmSelect={handleFilmSelect} />
              <FilmDetail
                selectedFilm={selectedFilm}
                onFavoriteToggle={handleFavoriteToggle}
                favorites={favorites}
              />
            </>
          )}
        </div>
      )}

      <audio ref={audioRef}>
        <source
          src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg"
          type="audio/ogg"
        />
        <source
          src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default App;
