import axios from "axios";
import React from "react";

function Poster(props) {
  return (
    <div className="flex flex-col gap-1 rounded p-3">
      <div className="group flex flex-row w-28 h-40 hover:shadow-2xl transition-all duration-500 shadow-xl">
        <img
          href="/"
          src={`https://image.tmdb.org/t/p/w500${props.poster}`}
          alt="Alt"
          className="rounded-lg"
        />
        <div className="flex w-28 h-40 absolute items-center justify-center">
          <div className="absolute bg-black opacity-0 group-hover:opacity-70 w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div>
                <span className="text-white font-bold py-1 px-2 rounded-full text-sm align-middle justify-center text-pretty flex-wrap">
                  {props.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Poster;