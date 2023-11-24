import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { getActorMovieCredits, getActorDetails } from '../api/tmdb-api';

const ActorDetails = () => {
  const { id: actorId } = useParams();
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
      {/* Actor Details */}
      <div>
        <h3>Movies</h3>
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
            {/* Display other movie details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorDetails;