import React from "react";

const STEPS = {
  '0' : {
    question: 'How much time are you planning on staying in the city?',
    answers: [
      '1 day',
      '2-4 days',
      '5-17 days',
      'longer'
    ]
  },
  '1': {
    question: 'How many rides do you expect per day?',
    answers: [
      '1',
      '2',
      '3',
      'more'
    ]
  },
  '2': {
    question: 'Where do you plan to ride?',
    answers: [
      'Just short rides ( 3 U/S-bahn stops or 6 bus/tram stops )',
      'Inside the city ( AB area )',
      'From-to outside the city ( ABC area )'
    ]
  }
}


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

