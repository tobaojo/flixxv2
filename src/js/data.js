// TODO: move to context
export async function getAuthorization() {
  const url = `https://api.themoviedb.org/3/authentication`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGE1MWU2MTU2NDg2NTZhYjNlYjNlNjcwYzg1YmVmOCIsInN1YiI6IjVmZDY3N2EyZmNhZGI0MDA0MGQ1MDE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w2SDBYb8dRCTAY4eoz_GoLva1wANM36_UYrulKT95DM",
    },
  };

  const response = await fetch(url, options);
  return response;
}

export async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGE1MWU2MTU2NDg2NTZhYjNlYjNlNjcwYzg1YmVmOCIsInN1YiI6IjVmZDY3N2EyZmNhZGI0MDA0MGQ1MDE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w2SDBYb8dRCTAY4eoz_GoLva1wANM36_UYrulKT95DM",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

// get movies
export const url = `https://api.themoviedb.org/3/movie/popular`;

// get images
export const baseImageURL = `https://api.themoviedb.org/3/configuration`;

// get movie
export const movieUrl = `https://api.themoviedb.org/3/movie/`;

// get movies
export const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular`;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGE1MWU2MTU2NDg2NTZhYjNlYjNlNjcwYzg1YmVmOCIsInN1YiI6IjVmZDY3N2EyZmNhZGI0MDA0MGQ1MDE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w2SDBYb8dRCTAY4eoz_GoLva1wANM36_UYrulKT95DM",
  },
};

export async function getData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
