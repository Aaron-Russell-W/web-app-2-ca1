import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getActorDetails, getActorMovieCredits } from '../api/tmdb-api';
import { Card,CardActionArea,CardMedia, CardContent, Avatar,Box, Tab, Tabs,Grid, Paper, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const ActorDetails = () => {
  const { id: actorId } = useParams(); 
  const [actorDetails, setActorDetails] = useState({});
  const [movies, setMovies] = useState([]);
  const [tabValue, setTabValue] = useState(0);

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
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const navigate = useNavigate();
  
  // Function to navigate to movie details
  const navigateToMovie = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Avatar 
            alt={actorDetails.name}
            src={`https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`}
            sx={{ width: 250, height: 250, marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h3">{actorDetails.name}</Typography>
          {/* Include additional actor info here if needed */}
        </Grid>
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="actor details tabs">
          <Tab label="Biography" />
          <Tab label="Filmography" />
          <Tab label="Gallery" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        {/* Biography */}
        {actorDetails.biography}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardActionArea onClick={() => navigateToMovie(movie.id)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {movie.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </TabPanel>
      <TabPanel value={tabValue} index={2}>
        {/* Gallery or Additional Content */}
      </TabPanel>
    </Box>
  );
};

export default ActorDetails;