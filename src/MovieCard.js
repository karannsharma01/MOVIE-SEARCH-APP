import React from "react";

const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite }) => {
  const handleFavorite = () => {
    if (onAddFavorite) onAddFavorite(movie);
  };

  const handleRemove = () => {
    if (onRemoveFavorite) onRemoveFavorite(movie.imdbID);
  };

  return (
    <div className="col-md-2 mb-3 my-3">
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          {onAddFavorite && (
            <button className="btn btn-success" onClick={handleFavorite}>
              Add to Favorites
            </button>
          )}
          {onRemoveFavorite && (
            <button className="btn btn-danger" onClick={handleRemove}>
              Remove from Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
