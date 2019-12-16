import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
     <h1>Directors Page</h1>
      {
        directors.map(item => {
          return (
            <div>
              <h3>{item.name}</h3>
              <ul>
                <li>{item.movies}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default Directors
