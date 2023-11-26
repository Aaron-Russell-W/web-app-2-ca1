# Assignment 1 - ReactJS app.

Name: Aaron Russell

## Overview.

[A brief statement on the content of this repository.]
This repo is an extension of the Week 7 lab from Web App Development 2. This app's functionaility has been expanded beyond the week 7 lab in the below ways.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Popular Actors Page - Page of the current popular actors accoring to TMDB
+ Now Playing Page (Currently in Cinema) - Page displaying the movies currently in the cinema
+ Actor Details Page - Which shows details about individual actor such as their biography and the movies they have appeared in
+ Where to watch - Functionaility added to the individual movieDetails page which shows where the movie can be accessed
+ Linking between Actors and Movies - From each individual Actor page there is a link to each movie they have appeared in and on each movie page there is now a link to each actor in the movie.
+ Google Auth Firebase Authentication - Supports google login and restricts access to the rest of the site when the user hasn't been signed in

## Setup requirements.

Certain variables required in .env directory
- Fill in details later

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Gets the cast from a movie - /movie/id/credits
+ Gets an individual Actors details - person/id
+ Gets an actors movie credits - person/id/movie_credits
+ Gets a list of currently popular actors - /person/popular
+ Where to watch endpoint -/movie/id/watch/providers
+ Gets a list of movies currently in the theatre - movie/now_playing
+ Gets the latest movie added to TMDB - /movie/latest

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]
Old
+ /home - Shows movie list - Protected
+ /movies/favourites - Shows your favourites - Protected
+ /movies/:id - Shows individual movie - Protected
+ /reviews/form - Shows the review form - Protected
+ /reviews/:id - Shows indivdiaul review - Protected
+ /movies/upcoming - Show upcoming films - Protected
New 
+ / - login page - Unprotected
+ /movies/nowplaying - Shows films currently in the theatre - Protected
+ /actors/popular - Show popular actors - Protected
+ /actors/:id - Show individual actors - Protected
## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).