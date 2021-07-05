import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      {/*{code here}*/}
      <div className='navbar'>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/movies">Movies</NavLink>
      <NavLink exact to="/directors">Directors</NavLink>
      <NavLink exact to="/actors">Actors</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
