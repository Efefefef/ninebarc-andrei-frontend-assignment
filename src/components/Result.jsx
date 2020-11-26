import React from "react";
import { STEPS, RECOMMENDATIONS_MAPPING } from './constants';

const getTicket = (answers) => {
  const mappingKey = answers.join("-");
  return RECOMMENDATIONS_MAPPING[mappingKey];
};

export default function Result({ progress }) {
  return (
    <div className="card-body">
      <div className="py-3">
        <h3>Your choices</h3>
        {Object.entries(STEPS).map(([step, { question, answers }]) => (
          <div key={step}>
            <p>{question}</p>
            <p className=" font-italic">{answers[progress[step]]}</p>
          </div>
        ))}
      </div>
      <div className="pt-3 ">
        <h3>We recommend you to get</h3>
        <p className="font-weight-bold font-italic alert alert-warning mx-5">{getTicket(progress)} ticket</p>
      </div>
    </div>
  );
}
