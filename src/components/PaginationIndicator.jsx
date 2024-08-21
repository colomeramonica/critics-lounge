/* eslint-disable react/prop-types */
import React from 'react';

export default function PaginationIndicator({ totalSteps, activeStep, setActiveStep }) {
  return (
    <div>
      {Array.from({ length: totalSteps }, (_, index) => (
        <span
          className="text-slate-900"
          key={index}
          onClick={() => setActiveStep(index)}
        >
          {index === activeStep ? '●' : '○'}
        </span>
      ))}
    </div>
  );
}