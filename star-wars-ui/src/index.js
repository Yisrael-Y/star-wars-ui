import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilmsContextInstance } from './context/apiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilmsContextInstance.Provider>
    <App />
  </FilmsContextInstance.Provider>
);
