import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    <div className="navbar" >
      <NavLink to="/"  exact>
        Home
      </NavLink>
      <NavLink to="/movies" >
        Movies
      </NavLink>
      <NavLink to="/actors" >
        Actors
      </NavLink>
      <NavLink to="/directors" >
        Directors
      </NavLink>
    </div>
    </div>
  );
};

export default NavBar;
