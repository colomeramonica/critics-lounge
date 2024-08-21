import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import axios from "axios";
import { useParams } from "react-router-dom";
const apiKey = import.meta.env.VITE_THEMOVIEDB_APIKEY;

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieInformation = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-U&api_key=${apiKey}&page=1`
        );
        const data = response.data.results;
        setReviews(data);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieInformation();
  }, []);
  return (
    <div className="flex flex-col w-full p-5 justify-center lg:justify-start">
      <h3 className="text-slate-900 font-bold capitalize pb-[10px] text-start text-xl drop-shadow">
        Reviews
      </h3>
      <div className="add-comment-section flex flex-col">
        <input type="text"
          className="text-slate-900 backdrop-filter backdrop-blur-lg bg-opacity-30 w-full p-3 rounded-lg bg-slate-200 drop-shadow focus:border-slate-800"
          placeholder="Write a review..." />
        <div className="flex justify-end">
          <button className="flex w-20 p-3 rounded-full bg-slate-900 font-bold drop-shadow mt-3 justify-center align-middle">
            Send
          </button>
        </div>
      </div>
      {reviews.slice(0, 3).map((review, index) => (
        <div className="comments-section flex flex-col my-6" key={index}>
          <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 w-full p-3 rounded-lg bg-slate-200 drop-shadow">
            <Rating rating={review.author_details.rating} />
            <p className="px-2 m-3 text-slate-900 text-sm ">Written by {review.author}</p>
            <span className="mt-6 text-slate-900 hyphens-auto text-pretty" dangerouslySetInnerHTML={{ __html: review.content }} />
          </div>
        </div>
      ))
      }
    </div >
  );
}