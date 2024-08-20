/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Poster from './Poster';
import { LeftArrow, RightArrow } from './Icons';

const Container = ({ list }) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepSize = 7;
  const start = activeStep * stepSize;
  const end = start + stepSize;
  const itemsPerStep = 6;
  const totalSteps = Math.ceil(list?.length / itemsPerStep);

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <div className="flex flex-row gap-3 bg-white rounded items-center justify-center">
        {list.slice(start, end).map((item) => (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <Poster
              key={item.id}
              title={item.title}
              poster={item.poster_path}
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-between content-center">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Previous
          <svg
            fill="none"
            height={32}
            viewBox="0 0 32 32"
            width={32}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#1E293B">
              </path> </g>
          </svg>
        </button>
        <div >
          {Array.from({ length: totalSteps }, (_, index) => (
            <span
              key={index}
              onClick={() => setActiveStep(index)}>
              {index === activeStep ? '●' : '○'}
            </span>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={activeStep === totalSteps - 1}
        >
          Next
          <svg
            fill="none"
            height={32}
            viewBox="0 0 32 32"
            width={32}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#1E293B">
              </path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Container;