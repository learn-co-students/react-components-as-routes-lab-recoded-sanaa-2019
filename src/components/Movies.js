import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {
        movies.map(item => {
          return (
            <div>
              <h3>{item.title} , {item.time}</h3>
              <ul>
                <li>{item.genres}</li>
              </ul>
            </div>
          )
        })
      }

    </div>
  );
};

export default Movies;
