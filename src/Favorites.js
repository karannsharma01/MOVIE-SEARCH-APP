import React from "react";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center " style={{ margin: '35px 0px',marginTop:"90px" }}>Your Favorite Movies</h2>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="col-md-4 mb-4" key={movie.imdbID}>
              <div className="card">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                  alt={movie.Title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromFavorites(movie)}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;

