import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={link} exact>
        Home
      </NavLink>
      <NavLink to="/movies" style={link}>
        Movies
      </NavLink>
      <NavLink to="/actors" style={link}>
        Actors
      </NavLink>
      <NavLink to="/directors" style={link}>
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
export default NavBar