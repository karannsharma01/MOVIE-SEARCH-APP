import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MovieApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Favorites">Favorites</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Search">Search</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}