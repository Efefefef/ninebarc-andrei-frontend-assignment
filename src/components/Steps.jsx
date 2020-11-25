import React from "react";
import { STEPS } from './constants';

export default function Steps({ currentStep, setCurrentStep, progress, setProgress}) {
  const handleClick = (index) => {
    progress[currentStep] = index;
    setProgress(progress);
    setCurrentStep(currentStep += 1);
  }

  return (
    <div className="steps">
      <h2>
        {STEPS[currentStep].question}
      </h2>
      {STEPS[currentStep].answers.map((answer, index) => (
        <button key={index} onClick={() => handleClick(index)}>{answer}</button>
      ))}
    </div>
  );
}

