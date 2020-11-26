import React, { useState } from "react";
import './App.css';
import Welcome from './Welcome';
import Steps from './Steps';
import Result from './Result';
import { FIRST_STEP, RESULT_STEP } from './constants';

function App() {
  const [username, setUsername] = useState(null);
  const [currentStep, setCurrentStep] = useState(FIRST_STEP);
  const [progress, setProgress] = useState([null, null, null]);

  return (
    <div className="main d-flex align-items-center">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="card col-md-9 col-lg-6">
            {username ? (
              <>
                <div className="card-header h4">
                  {`Dear ${username},`}
                </div>
                {currentStep === RESULT_STEP ? (
                  <Result progress={progress}/>
                ) : (
                  <Steps
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    progress={progress}
                    setProgress={setProgress}
                  />
                )}
              </>
            ) : (
              <>
                <div className="card-header h4">
                  Berlin Ticket Adviser
                </div>
                <Welcome onChange={setUsername}/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
