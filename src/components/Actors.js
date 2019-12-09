import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map(act => (
    <div>
    {act.name}
      <ul>
      {act.movies.map(mv => (
        <li>{mv}</li>
          ))}
      </ul>
      </div>
    ))}
  </div>
  );
};

export default Actors;
