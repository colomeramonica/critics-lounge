import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import MovieDetails from "../components/MovieDetails";
import MovieImage from "../components/MovieImage";
import '../index.css';
import MovieReviews from "../components/MovieReviews";

const apiKey = import.meta.env.VITE_THEMOVIEDB_APIKEY;

export default function ItemPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieInformation = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}&page=1`
        );
        const data = response.data;
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie releases:', error);
      }
    };

    fetchMovieInformation();
  }, [movieId]);

  return (
    <>
      <div className="flex lg:flex-row flex-col h-full">
        <div className="flex lg:w-1/2">
          <NavBar />
        </div>
        <div className="flex lg:flex-row flex-col gap-3 lg:justify-start justify-center align-top p-7 sm:mx-20">
          <MovieImage posterPath={movie.poster_path} />
          <MovieDetails movie={movie} />
        </div>
      </div>
      <div className="flex flex-row lg:justify-start justify-center items-center lg:p-5 mx-20">
        <MovieReviews movieId={movieId} />
      </div>
    </>
  );
}