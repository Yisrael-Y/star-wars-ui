import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const FilmsContextInstance = createContext();
const FilmsContext = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  const serverURL = "https://swapi.dev/api/"
  const userData = 

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
        const response = await axios.get(`${serverURL}films`);
        setFilms(response.data.results);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch films");
    }
  };

  const saveFilm = async (filmId) => {
    try {
      await axios.post(
        `${serverURL}/films/save/${userData.id}`,
        { filmId },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
      throw new Error("Failed to save film");
    }
  };

  const unsaveFilm = async (filmId) => {
    try {
      await axios.delete(
        `${serverURL}/films/save/${userData.id}?filmId=${filmId}`,
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
      throw Error("Failed to unsave film");
    }
  };

  const getSavedFilms = async () => {
    try {
      const res = await axios.get(`${serverURL}/films/user/${userData.id}`, {
        withCredentials: true,
      });
      setSavedFilms(res.data);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to get saved films");
    }
  };

  return (
    <FilmsContextInstance.Provider
      value={{
        films,
        setFilms,
        savedFilms,
        saveFilm,
        unsaveFilm,
        getSavedFilms,
        fetchFilms,
      }}
    >
      {children}
    </FilmsContextInstance.Provider>
  );
};

export { FilmsContextInstance };
export default FilmsContext;
