import React from 'react';
import PropTypes from 'prop-types';

export default function MovieGenres({ genres }) {
  return (
    <div className="genres flex lg:flex-row flex-col justify-center align-center items-center">
      {genres?.map((genre) => (
        <span
          key={genre.id}
          className="p-3 lg:ml-5 mt-3 text-slate-800 font-semibold text-center rounded-full bg-white bg-opacity-50 drop-shadow"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
}

MovieGenres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};