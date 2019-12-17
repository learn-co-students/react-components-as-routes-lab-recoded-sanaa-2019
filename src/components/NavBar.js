import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" exact>
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
  );
};
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 10px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};
export default NavBar;
