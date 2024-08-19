import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";

export default function ItemPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovieInformation = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=68819b168b6b07cbbee3b3f18354190a&page=1`
        );
        const data = response.data;
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie releases:', error);
      }
    };

    fetchMovieInformation();
  }, []);

  console.log(movie);

  return (
    <>
      <div className="flex flex-row w-screen h-screen p-5">
        <div className="flex flex-row align-top">
          <div className="flex justify-start p-5 drop-shadow">
            <img
              href="/"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Alt"
              className="rounded-lg"
              style={{ width: "250px", height: "350px" }}
            />
          </div>
          <div className="item-detail w-1/2 justify-center items-center ">
            <h2 className="title p-3 text-slate-800 font-bold capitalize pb-[10px] text-center text-3xl">
              {movie.title}
            </h2>
            <div className="overview p-3 rounded-lg bg-slate-300 drop-shadow">
              <p className="my-5 mx-3  text-slate-800 text-justify text-base">
                {movie.overview}
              </p>
              <div className="details p-3 justify-start">
                <h3 className="text-slate-800 font-bold capitalize pb-[10px] text-start text-xl">
                  Details
                </h3>
                <p className="my-5 text-slate-800 text-justify text-base">
                  <b>Release Date:</b> {movie.release_date}
                </p>
                <p className="my-5 text-slate-800 text-justify text-base">
                  <b>Runtime:</b> {movie.runtime} minutes
                </p>
                <p className="my-5 text-slate-800 text-justify text-base">
                  <b>Vote Average:</b> {movie.vote_average}
                </p>
              </div>
              <div className="genres flex justify-center p-3">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="p-3 ml-5 text-slate-800 font-semibold text-center rounded-full bg-white bg-opacity-50 drop-shadow"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-screen h-screen p-5">
        <Comments movieId={movieId} />
      </div>
    </>
  );
}