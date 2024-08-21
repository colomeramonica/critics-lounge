import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ShowcaseContainer from '../components/Showcase';
import { fetchAiringToday, fetchMovieReleases, fetchPopularMovies, fetchPopularTv } from '../api';

export default function HomePage() {
  const [movieReleases, setMovieReleases] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

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
    <div className="flex lg:flex-row flex-col h-full">
      <div className="flex lg:w-1/2">
        <NavBar />
      </div>
      <div className="flex lg:flex-row flex-col gap-3 lg:justify-start justify-center align-top p-7 sm:mx-20">
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