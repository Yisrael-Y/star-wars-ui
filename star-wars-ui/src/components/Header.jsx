import React, { useState } from "react";
import "../styles/Header.css";
import FavoriteFilms from "./FavoriteFilms";

const Header = ({
  handleToggleAudio,
  isPlaying,
  setShowWelcomePage,
  showWelcomePage,
}) => {

  return (
    <div className="headerContainer">
      <span
        className="aboutButton"
        onClick={() => setShowWelcomePage(!showWelcomePage)}
      >
        <br />
        {!showWelcomePage ? "About" : "Back to Films"}
      </span>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
        alt="Logo"
      />
      <span className="playButton" onClick={handleToggleAudio}>
        <br />
        {isPlaying ? "Pause Audio" : "Play Audio"}
      </span>
    </div>
  );
};

export default Header;
