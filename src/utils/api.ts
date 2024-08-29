export const getAllMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ee912c60a4c49c7e6035f55f0aabc369",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   
    const data = await res.json();
   
    return data;
  };