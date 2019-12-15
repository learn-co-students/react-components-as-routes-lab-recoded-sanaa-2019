import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {
        actors.map(item => {
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
};

export default Actors;
