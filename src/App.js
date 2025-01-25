import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./MovieList";
import Search from "./SearchBar";
import Favorites from "./Favorites";
import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavorites(updatedFavorites);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToFavorites={addToFavorites} />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}
        />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;

