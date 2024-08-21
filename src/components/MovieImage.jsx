import React from 'react';
import PropTypes from 'prop-types';

export default function MovieImage({ posterPath }) {
  return (
    <div className="flex flex-col w-full p-5 mx-10 justify-center lg:justify-start drop-shadow">
      <img
        href="/"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Alt"
        className="rounded-lg"
        style={{ width: "250px", height: "350px" }}
      />
    </div>
  );
}

MovieImage.propTypes = {
  posterPath: PropTypes.string.isRequired,
};