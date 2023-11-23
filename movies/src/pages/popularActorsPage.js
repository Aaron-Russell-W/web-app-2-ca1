import React, { useEffect, useState } from 'react';
import { getPopularActors } from '../api/tmdb-api'; // Adjust the path as per your project structure

const PopularActorsPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getPopularActors()
      .then((data) => {
        setActors(data.results); // Assuming the API response has a 'results' key with actors data
      })
      .catch((error) => {
        console.error('Error fetching actors:', error);
      });
  }, []);

  return (
    <div>
      <h1>Popular Actors</h1>
      <div>
        {actors.map((actor) => (
          <div key={actor.id}>
            <h2>{actor.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
            {/* Display more details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularActorsPage;