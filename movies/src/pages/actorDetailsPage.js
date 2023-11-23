import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorMovieCredits, getActorDetails } from '../api/tmdb-api';

const ActorDetails = () => {
  const { id: actorId } = useParams(); // Change 'actorId' to 'id' to match the route parameter
  const [actorDetails, setActorDetails] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getActorDetails(actorId)
      .then(data => {
        setActorDetails(data);
      })
      .catch(error => console.error(error));

    getActorMovieCredits(actorId)
      .then(data => {
        setMovies(data.cast);
      })
      .catch(error => console.error(error));
  }, [actorId]);

  return (
    <div>
      {actorDetails && (
        <div>
          <h2>{actorDetails.name}</h2>
          {/* Display other actor details */}
        </div>
      )}

      <div>
        <h3>Movies</h3>
        {movies.map(movie => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            {/* Display other movie details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorDetails;