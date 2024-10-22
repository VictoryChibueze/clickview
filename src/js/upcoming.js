import { convertToJSON } from "./utils"; // Assuming this utility is to convert the response to JSON

// API URL and headers (ensure API key security in production)
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjU4YWZkMTViNmFiMGI0ODliMzM5N2E2ZmMzNzQxZiIsIm5iZiI6MTcyOTYwMjgzMC41OTU3MjgsInN1YiI6IjY3MTc4NjkyYTc3YWYxZGJiYWY4YWVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IiF4nO7p-wft2azNtsMpjdNxPnIw9Mnk5u_DbCtmD_0",
  },
};

const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

// Base URL for movie posters (adjustable size)
const imageBaseURL = "https://image.tmdb.org/t/p/w500";

// Class to fetch and render upcoming movies
export default class Upcoming {
  constructor() {}

  // Fetch upcoming movies from the TMDb API
  async fetchUpcomingMovies() {
    const response = await fetch(url, options);
    const data = await convertToJSON(response); // Utility function to convert response to JSON
    console.log(data);
    return data.results;
  }

  // Render the fetched movies into the DOM
  async renderUpcomingMovies() {
    const fetchedData = await this.fetchUpcomingMovies();
    const element = document.querySelector("section");

    // Map over the fetched data and generate HTML
    const html = fetchedData
      .map(
        (el) => `
          <div class="movies">
          <h2 class ="title">${el.title}</h2>
            <img class = "poster-img" src="${imageBaseURL}${el.backdrop_path}" alt="The image of ${el.title}" />
            
            <p class = "overview">${el.overview}</p>
            <p>Rating: ${el.vote_average}⭐</p>
            <span>Release Date: ${el.release_date}</span>
          </div>
        `,
      )
      .join(""); // Join the array into a single HTML string

    // Insert the generated HTML into the DOM
    console.log(element);
    element.innerHTML = html;
  }
}
