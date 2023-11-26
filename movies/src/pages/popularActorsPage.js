import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularActors } from '../api/tmdb-api';
import { useQuery } from 'react-query';

const PopularActorsPage = () => {
  const { data, isLoading, error } = useQuery('popularActors', getPopularActors);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const actors = data.results;


  return (
    <div>
      <h1>Popular Actors</h1>
      <div>
        {actors.map((actor) => (
            <Link to={`/actors/${actor.id}`} key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
            <h2>{actor.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularActorsPage;