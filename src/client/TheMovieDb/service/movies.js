import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org",
})

const API_KEY = "615f7fda65bd6286053fff1133763b02";

export const getTrendingMovies = (page) => {
    return instance.get('/3/trending/all/day', {
        params: {
            api_key: API_KEY,
            page
        }
    })
};

export const searchMovieByName = (query) => {
    return instance.get('/3/search/movie', {
        params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            query
        }
    })
};

export const getMovieDetailsById = (id) => {
    return instance.get(`/3/movie/${id}`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
        }
    })
};

export const getMovieCredits = (id) => {
    return instance.get(`/3/movie/${id}/credits`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
        }
    })
};

export const getMoviesReviews = (id) => {
    return instance.get(`/3/movie/${id}/reviews`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1
        }
    })
};