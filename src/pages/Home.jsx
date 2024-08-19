import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../components/Container';

export default function HomePage() {

  const [movieReleases, setMovieReleases] = useState([]);

  useEffect(() => {
    const fetchMovieReleases = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=68819b168b6b07cbbee3b3f18354190a&page=1'
        );
        const data = response.data.results;
        setMovieReleases(data);
      } catch (error) {
        console.error('Error fetching movie releases:', error);
      }
    };

    fetchMovieReleases();
  }, []);

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-3/4 justify-start items-start p-5">
        <h2 className="p-3 text-slate-800 font-bold capitalize pb-[10px] text-center text-2xl">
          Lançamentos
        </h2>
        <div className="flex flex-row gap-3 bg-white rounded items-center justify-center">
          <Container list={movieReleases} />
        </div>
      </div>
    </div>
  );
}