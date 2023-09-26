// Import React and component-specific styles
import React from "react";
import "../styles/Header.css";
import FavoriteFilms from "./FavoriteFilms";

// Define the Header component
const Header = ({
  handleToggleAudio,
  favorites,
  setShowWelcomePage,
  showWelcomePage,
  handleFilmSelect,
}) => {
  // Function to handle the "About" button click
  const handleAboutClick = () => {
    // Toggle between showing the "About" page and going back to films
    setShowWelcomePage(!showWelcomePage);
    handleToggleAudio(); // Toggle audio playback
  };

  // Render the component
  return (
    <div className="headerContainer">
      {/* "About" button */}
      <span className="aboutButton" onClick={() => handleAboutClick()}>
        <br />
        {!showWelcomePage ? "About" : "Back to Films"}
      </span>

      {/* Logo */}
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
        alt="Logo"
      />

      {/* Hamburger menu for favorite films */}
      <span className="favorites-hamburger">
        <FavoriteFilms
          favorites={favorites}
          handleFilmSelect={handleFilmSelect}
        />
      </span>
    </div>
  );
};

export default Header;
