import axios from 'axios';
const apiKey = import.meta.env.VITE_THEMOVIEDB_APIKEY;

export const fetchMovieReleases = async () => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}&page=1`
		);
		return response.data.results;
	} catch (error) {
		console.error('Error fetching movie releases:', error);
	}
};

export const fetchPopularMovies = async () => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${apiKey}&page=1`
		);
		return response.data.results;
	} catch (error) {
		console.error('Error fetching movie releases:', error);
	}
};

export const fetchAiringToday = async () => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/tv/airing_today?language=en-US&api_key=${apiKey}&page=1`
		);
		return response.data.results;
	} catch (error) {
		console.error('Error fetching movie releases:', error);
	}
};

export const fetchPopularTv = async () => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=${apiKey}&page=1`
		);
		return response.data.results;
	} catch (error) {
		console.error('Error fetching movie releases:', error);
	}
};
