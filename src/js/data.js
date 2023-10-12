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

// export async function getPopularMovies() {
//   const url = `https://api.themoviedb.org/3/movie/popular`;

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGE1MWU2MTU2NDg2NTZhYjNlYjNlNjcwYzg1YmVmOCIsInN1YiI6IjVmZDY3N2EyZmNhZGI0MDA0MGQ1MDE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w2SDBYb8dRCTAY4eoz_GoLva1wANM36_UYrulKT95DM",
//     },
//   };

//   const response = await fetch(url, options);
//   const data = await response.json();
//   return data;
// }

export const url = `https://api.themoviedb.org/3/movie/popular`;

export const baseImageURL = `https://api.themoviedb.org/3/configuration`;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGE1MWU2MTU2NDg2NTZhYjNlYjNlNjcwYzg1YmVmOCIsInN1YiI6IjVmZDY3N2EyZmNhZGI0MDA0MGQ1MDE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w2SDBYb8dRCTAY4eoz_GoLva1wANM36_UYrulKT95DM",
  },
};
