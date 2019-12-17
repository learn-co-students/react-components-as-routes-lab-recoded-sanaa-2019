import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors: </h1>
      {actors.map(actor => (
        <div className="">
          {actor.name}
          <ul>
            {actor.movies.map(movie => ( <li>{movie}</li> ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
