import React, { useState } from "react";
import Welcome from './Welcome';
import Steps from './Steps';
import Result from './Result';

const RESULT_STEP = 4;

function App() {
  const [username, setUsername] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState([null, null, null]);

  return (
    <div className="App">
      {username ? (
        <>
          <p>Dear {username}</p>
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
        <Welcome onChange={setUsername}/>
      )}
    </div>
  );
}

export default App;
