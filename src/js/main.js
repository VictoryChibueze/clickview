import Upcoming from "./upcoming";
// Initialize the Upcoming class and render the movies
const upcomingMovies = new Upcoming();
upcomingMovies.renderUpcomingMovies(); // Fetch and render movies

// Optional: Fetch and log movies info (if needed)
const upcomingMoviesInfo = upcomingMovies.fetchUpcomingMovies();
console.log(upcomingMoviesInfo);
