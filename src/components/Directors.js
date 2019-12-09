import { directors } from "../data";

const Directors = () => {
  return (
    
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir => (
        <div className="">
          {dir.name}
          <ul>
            {dir.movies.map(mv => (
              <li>{mv}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
};

export default Directors;