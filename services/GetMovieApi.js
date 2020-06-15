import
axios
from 'axios';

export function getPopularMovies() {
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=410f08740e2bb0f96b885f589bac2ce1&language=fr-FR&page=1");
}

export function getImage(id) {
    return axios.get("https://image.tmdb.org/t/p/original/" + id);
}