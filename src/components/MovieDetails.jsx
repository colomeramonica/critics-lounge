import React from 'react';
import PropTypes from 'prop-types';
import MovieGenres from './MovieGenres';

export default function MovieDetails({ movie }) {
  return (
    <div className="flex flex-col w-full p-5 mx-10 justify-center lg:justify-start align-middle items-center">
      <h2 className="title p-3 text-slate-800 font-bold capitalize pb-[10px] text-center text-3xl">
        {movie.title}
      </h2>
      <div className="flex flex-col lg:justify-start justify-center backdrop-filter backdrop-blur-lg bg-opacity-30 lg:p-3 bg-slate-200 rounded-lg drop-shadow">
        <p className="my-5 mx-3 text-slate-800 text-justify text-base">
          {movie.overview}
        </p>
        <div className="details lg:p-3 justify-start">
          <h3 className="text-slate-800 font-bold capitalize pb-[10px] text-start text-xl drop-shadow">
            Details
          </h3>
          <p className="my-5 text-slate-800 text-justify text-base drop-shadow-sm">
            <b>Release Date:</b> {movie.release_date}
          </p>
          <p className="my-5 text-slate-800 text-justify text-base drop-shadow-sm">
            <b>Runtime:</b> {movie.runtime} minutes
          </p>
          <p className="my-5 text-slate-800 text-justify text-base drop-shadow-sm">
            <b>Vote Average:</b> {movie.vote_average}
          </p>
        </div>
        <MovieGenres genres={movie.genres} />
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};