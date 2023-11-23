import React from "react";
import { useParams } from 'react-router-dom';
import { getMovie, getMovieWatchProviders } from '../api/tmdb-api';
import { useQuery } from "react-query";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  const {data: availability} = useQuery(
    ["watch", { id: id}],
    getMovieWatchProviders
  )
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} availability={availability}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;