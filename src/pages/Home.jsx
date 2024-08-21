import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ShowcaseContainer from '../components/Showcase';
import { fetchAiringToday, fetchMovieReleases, fetchPopularMovies, fetchPopularTv } from '../api';

export default function HomePage() {
  const [movieReleases, setMovieReleases] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [popularTv, setPopularTv] = useState([]);

  useEffect(() => {
    console.log('useEffect triggered');

    async function fetchData() {
      console.log('fetchData called');

      try {
        const _movieReleases = await fetchMovieReleases() || [];
        const _popularMovies = await fetchPopularMovies() || [];
        const _airingToday = await fetchAiringToday() || [];
        const _popularTv = await fetchPopularTv() || [];

        setMovieReleases(_movieReleases);
        setPopularMovies(_popularMovies);
        setAiringToday(_airingToday);
        setPopularTv(_popularTv);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-row h-full">
      <div className="flex w-1/2">
        <NavBar />
      </div>
      <div className="flex flex-col p-5 mx-20 justify-start items-start">
        {movieReleases && movieReleases.length > 0 && (
          <ShowcaseContainer media="movie" list={movieReleases} title="Filmes recentes" />
        )}
        {airingToday && airingToday.length > 0 && (
          <ShowcaseContainer media="tv" list={airingToday} title="Programas de TV em exibição" />
        )}
      </div>
    </div>
  );
}