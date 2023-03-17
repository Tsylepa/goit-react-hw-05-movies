import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'f8511e8dedf10eda656f1fd45ffd8165';

//TRENDING
async function getTrending(page) {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/week?api_key=${KEY}&page=${page}&language=en-US`
  );
  return data;
}

//DETAILS
async function getMovieById(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&append_to_response=videos&language=en-US`
  );
  return data;
}

//SEARCH
async function getMoviesByKeyword(keyword) {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${keyword}&language=en-US`
  );
  return data;
}

//REVIEWS
async function getMovieReviews(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
  return data;
}

//CAST
async function getMovieCast(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
}

export {
  getTrending,
  getMovieById,
  getMoviesByKeyword,
  getMovieReviews,
  getMovieCast,
};
