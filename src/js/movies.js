const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3f7d67322emsh2ae75c48e1ab99fp11c6bcjsn7f493056d4dc",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

export default class Movies {
  constructor() {}

  async fetchMovies() {
    const response = await fetch(url, options);
    const data = await convertToJSON(response);
    console.log(data);
    return data;
  }

  //   renderMoviesDetails(selector) {
  //     const element = document.querySelector(selector);
  //     element.insertAdjacentHTML("afterBegin", moviesCardTemplate(movie));
  //   }
}
