import React from 'react';
import { actors } from '../data';

const Actors = () => {
  // for (const key in actors) {
  //   if (actors.hasOwnProperty(key)) {
  //     const element = actors[key];


  //   }
  // }

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
