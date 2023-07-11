import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary ">
      <a className="navbar-brand mx-4 text-light" href="/home">
        Sneakers
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"></div>
    </nav>
  );
}

export default Nav;
