import React, { useState, useEffect } from "react";
import "../styles/Welcome.css";

const WelcomePage = ({ setShowWelcomePage, handleToggleAudio }) => {




  return (
    <div className="welcome-body">
    <article className="starwars">
        <div >
          <section className="intro">
            A long time ago, in a galaxy far, far away....
          </section>
          <section className="titles">
            <div>
              <p>Welcome to the Star Wars Movie Selector App!</p>

              <p>
                We're thrilled to introduce you to our web application built on
                the powerful 'Star Wars API' (https://swapi.dev/). Our app is
                designed to make it easy for you to choose and keep track of
                your favorite Star Wars movies.
              </p>

              <p>
                On the left side of the screen, you'll find a list of all the
                Star Wars films. Each film is listed by its title, making it
                convenient for you to browse through the entire collection.
              </p>

              <p>
                On the right side of the screen, you'll see detailed information
                about the selected film.
              </p>

              <p>
                You can easily mark a film as your favorite by clicking the
                "Favorite" button.
              </p>

              <p>
                The hamburger menu on the left is where you will find your favorite films. Click on the hamburger menu to open it and see your favorite films. Click on the hamburger menu again to close it.
              </p>
              <p>
                Thank you for choosing 'The Star Wars API' Movie Selector App.
                We hope you enjoy exploring the Star Wars universe and selecting
                your favorite movies with ease! May the Force be with you as you
                embark on this cinematic journey.
              </p>
            </div>
          </section>
          </div>
    </article>
    </div>
  );
};

export default WelcomePage;
