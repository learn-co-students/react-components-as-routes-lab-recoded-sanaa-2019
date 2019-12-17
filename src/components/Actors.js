import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let mapper=()=>{
    return actors.map(e=>{
     return <div>{[<h4>Name: {e.name}</h4>,
      <p>Movies</p>,
    <ul>{e.movies.map(a=>{
    return <li>{a}</li>
    })}</ul>]}</div>
    })
  }
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {mapper()}
      </div>
  )
};

export default Actors;
