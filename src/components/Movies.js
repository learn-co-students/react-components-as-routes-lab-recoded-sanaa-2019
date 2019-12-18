import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let mapper=()=>{
    return movies.map(e=>{
     return <div>
       { [<h4>Title: {e.title}</h4>,
     <p>Time {e.time}</p>,
      <p>Geners</p>,
    <ul>{e.genres.map(a=>{
    return <li>{a}</li>
    })}</ul>]}
     </div>
    })
  }
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {mapper()}
    </div>
  );
};

export default Movies;