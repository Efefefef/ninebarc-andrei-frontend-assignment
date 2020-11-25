import React, { useState } from "react";
import './App.css';
import Welcome from './components/Welcome';
import Steps from './components/Steps';

function App() {
  const [username, setUsername] = useState(null);
  // const [progress, setProgress] = useState(null);

  return (
    <div className="App">
      { username ? (
        <>
          <p>Hi { username }</p>
          <Steps />
        </>
      ) : (
        <Welcome onChange={setUsername} />
      )}
    </div>
  );
}

export default App;
