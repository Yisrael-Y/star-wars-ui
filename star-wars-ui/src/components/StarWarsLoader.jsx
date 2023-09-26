import React from 'react';
import '../styles/StarWarsLoader.css'; // Import the CSS file for styling

const StarWarsLoader = () => {
  return (
<div className="loading">
  <div className="arc"></div>
  <div className="arc"></div>
  <div className="arc"></div>
</div>  );
}

export default StarWarsLoader;
