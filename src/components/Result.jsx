import React from "react";
import { STEPS, RECOMMENDATIONS_MAPPING } from './constants';

const getTicket = (answers) => {
  const mappingKey = answers.join("-");
  return RECOMMENDATIONS_MAPPING[mappingKey];
};

export default function Result({ progress }) {
  return (
    <div className="result">
      <h1>Your choices:</h1>
      {Object.entries(STEPS).map(([step, { question, answers }]) => (
        <div>
        <h2 key={step}>{question}</h2>
        {answers[progress[step]]}
        </div>
      ))}
      <h1>Result:</h1>
      {getTicket(progress)}
    </div>
  );
}
