import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "931eb56b";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetchMovies("avengers"); 
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        alert("No movies found for the search.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

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
    <div className="container mt-5">
      <h1 className="text-center " style={{ margin: '35px 0px',marginTop:"90px" }} >Movie List</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.imdbID}>
            <div className="card">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                {favorites.find((fav) => fav.imdbID === movie.imdbID) ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromFavorites(movie)}
                  >
                    Remove from Favorites
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => addToFavorites(movie)}
                  >
                    Add to Favorites
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

