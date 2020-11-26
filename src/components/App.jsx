import React, { useState } from "react";
import './App.css';
import Welcome from './Welcome';
import Steps from './Steps';
import Result from './Result';

const FIRST_STEP = 0;
const RESULT_STEP = 3;

function App() {
  const [username, setUsername] = useState(null);
  const [currentStep, setCurrentStep] = useState(FIRST_STEP);
  const [progress, setProgress] = useState([null, null, null]);

  return (
    <div className="main">
      <div className="container text-center">
        <div className="row justify-content-center pt-5">
          <div className="card col-md-9 col-lg-6">
            <div className="card-header h4">
              {username ? (
                <p>Dear {username},</p>
              ) : (
                <p>Berlin Ticket Adviser</p>
              )}
            </div>
            {username ? (
                currentStep === RESULT_STEP ? (
                  <Result progress={progress}/>
                ) : (
                  <Steps
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    progress={progress}
                    setProgress={setProgress}
                  />
                )
            ): (
              <Welcome onChange={setUsername}/>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
