import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map(mv => (
      <div>
        {mv.title} {mv.time}
        <ul>
          {mv.genres.map(g => (
            <li>{g}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};

export default Movies;
