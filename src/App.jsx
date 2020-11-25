import React, { useState } from "react";
import './App.css';
import Welcome from './components/Welcome';
import Steps from './components/Steps';

function App() {
  const [username, setUsername] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState([null, null, null]);

  return (
    <div className="App">
      { username ? (
        <>
          <p>Hi { username }</p>
          <Steps
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            progress={progress}
            setProgress={setProgress}
          />
        </>
      ) : (
        <Welcome onChange={setUsername} />
      )}
    </div>
  );
}

export default App;
