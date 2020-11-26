import React from "react";
import { STEPS } from './constants';

export default function Steps({ currentStep, setCurrentStep, progress, setProgress }) {
  const chooseAnswer = (index) => {
    progress[currentStep] = index + 1;
    setProgress(progress);
    setCurrentStep(currentStep += 1);
  }

  return (
    <div className="card-body">
      <h3 className="py-3">
        {STEPS[currentStep].question}
      </h3>
      <div className="d-flex justify-content-around py-3">
        {STEPS[currentStep].answers.map((answer, index) => (
          <button className="btn btn-primary mx-2" key={index} onClick={() => chooseAnswer(index)}>{answer}</button>
        ))}
      </div>
    </div>
  );
}

