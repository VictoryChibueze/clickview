// Get the movie ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");
console.log(movieId);
// Define API URL and options (reuse as needed)
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjU4YWZkMTViNmFiMGI0ODliMzM5N2E2ZmMzNzQxZiIsIm5iZiI6MTcyOTYwMjgzMC41OTU3MjgsInN1YiI6IjY3MTc4NjkyYTc3YWYxZGJiYWY4YWVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IiF4nO7p-wft2azNtsMpjdNxPnIw9Mnk5u_DbCtmD_0",
  },
};
const imageBaseURL = "https://image.tmdb.org/t/p/w500";
// Function to fetch movie details
async function fetchMovieDetails(id) {
  const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  try {
    const response = await fetch(detailsUrl, options);
    if (!response.ok) throw new Error("Failed to fetch movie details");
    const movie = await response.json();
    console.log(movie);
    renderMovieDetails(movie);
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

// Function to render movie details into the DOM
function renderMovieDetails(movie) {
  const element = document.querySelector(".details");
  console.log(element);
  element.innerHTML = `
   <div class="movie-detail">
  
    <div class="image-container">
      <img src="${imageBaseURL}${movie.backdrop_path}" alt="Poster of ${movie.title}" />
      <div class="overlay"></div>
      <div class="text-overlay">
        <h3>${movie.title}</h3>
       <p>Genre: ${movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>${movie.overview}</p>
        <p>Rating: ${movie.vote_average}⭐</p>
        <p>Release Date: ${movie.release_date}</p>
        <button id="favoriteBtn">Add to Favorites</button>
      </div>
    </div>
  
  </div>

  `;

  document
    .getElementById("favoriteBtn")
    .addEventListener("click", () => addMovieToFavorites(movie));
}

// Fetch and render movie details on page load
if (movieId) {
  fetchMovieDetails(movieId);
} else {
  console.error("Movie ID not found in URL");
}

function addMovieToFavorites(movie) {
  // Retrieve existing favorites from local storage or initialize an empty array
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if the movie is already in favorites
  const movieExists = favorites.some((fav) => fav.id === movie.id);
  if (!movieExists) {
    // Add the movie to favorites
    favorites.push({
      id: movie.id,
      title: movie.title,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
    });

    // Save the updated favorites back to local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${movie.title} has been added to your favorites!`);
  } else {
    alert(`${movie.title} is already in your favorites.`);
  }
}

export default function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}
