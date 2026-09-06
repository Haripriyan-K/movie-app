const BASE_URL = import.meta.env.BASE_URL;
const API_KEY = import.meta.env.API_KEY;

export const getPopularMovies = async() => {

  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error(`Popular movies request failed: ${res.status}`);
  const data =  await res.json()
  return data.results

};


export const searchMovies = async(query) => {

    const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(

            query

      )}`
    );

    if (!res.ok) throw new Error(`Movie search request failed: ${res.status}`);
    const data =  await res.json()
    return data.results
};
