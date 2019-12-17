import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let mapper=()=>{
    return directors.map(e=>{
     return <div>
       {[<h4>Name: {e.name}</h4>,
      <p>Movies</p>,
    <ul>{e.movies.map(a=>{
    return <li>{a}</li>
    })}</ul>]}
     </div>
    })
  }
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {mapper()}
    </div>
  );
}

export default Directors
