import axios from "axios";

const API_KEY = '9d0df20d0e68b9609d989d5d76848891';

export const getTrendMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  
   return response.data.results;
};


export const getMovieById = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(response.data);
  return response.data;


};


export const getMoviesByQuery = async query => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        query,
      },
    }
  );
  return response.data.results;
};







export const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    { params: { api_key: API_KEY } }
  );
  return response.data.results;
};