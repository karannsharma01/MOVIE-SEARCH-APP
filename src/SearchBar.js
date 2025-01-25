import React, { useState } from "react";
import fetchMovies from "./api";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    if (!query.trim()) {
      setError("Please enter a valid movie name.");
      return;
    }
    try {
      const data = await fetchMovies(query);
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setError("No movies found.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className ="text-center"style={{ margin: '35px 0px',marginTop:"90px" }}>Search Movies</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-2">Search</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.imdbID}>
            <div className="card">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5>{movie.Title}</h5>
                <p>{movie.Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
