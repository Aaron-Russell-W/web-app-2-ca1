import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie, availability }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ... existing Typography components */}

      <Paper component="ul" sx={{...root}}>
        <Chip label="Genres" sx={{...chip}} color="primary" />
        {movie.genres && movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      {/* ... other Paper components for movie details */}

      <Paper component="ul" sx={{...root}}>
        <Chip label="Production Countries" sx={{...chip}} color="primary" />
        {movie.production_countries && movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <Chip label="Where to watch:" sx={{...chip}} color="primary" />
        {availability?.results?.IE?.buy && availability.results.IE.buy.map((b) => (
          <li key={b.provider_name}>
            <Chip label={b.provider_name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      {/* ... Fab and Drawer components */}
    </>
  );
};

export default MovieDetails;