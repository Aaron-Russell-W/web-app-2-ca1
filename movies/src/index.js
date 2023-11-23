import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import LoginFunc from "./components/loginPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      frefetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route path="/reviews/form" element={ <AddMovieReviewPage/> } />
          <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<LoginFunc />}/>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
          <Route path="/movies/upcoming" element={<UpcomingPage />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);