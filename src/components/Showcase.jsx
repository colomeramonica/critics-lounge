/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Poster from './Poster';
import NavigationButton from './NavigationButton';
import PaginationIndicator from './PaginationIndicator';

export default function ShowcaseContainer({ media, list, title }) {
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
      <h2 className="p-3 text-slate-800 font-bold capitalize pb-[10px] text-center text-2xl">
        {title}
      </h2>
      <div className="flex flex-row gap-3 backdrop-filter backdrop-blur-lg bg-opacity-20 rounded items-center justify-center">
        {list.slice(start, end).map((item) => (
          <Link to={`/${media}/${item.id}`} key={item.id}>
            <Poster
              key={item.id}
              title={item.title}
              poster={item.poster_path}
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-between content-center">
        <NavigationButton onClick={handleBack} disabled={activeStep === 0} direction="back" />
        <PaginationIndicator totalSteps={totalSteps} activeStep={activeStep} setActiveStep={setActiveStep} />
        <NavigationButton onClick={handleNext} disabled={activeStep === totalSteps - 1} direction="next" />
      </div>
    </div>
  );
}