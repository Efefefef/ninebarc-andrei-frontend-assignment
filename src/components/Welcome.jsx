import React, { useRef, useEffect } from "react";

const Welcome = ({ onChange: setUsername }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.select();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputEl.current.value);
  };

  return (
    <div className="welcome">
      <h1>
        Welcome to Berlin!
      </h1>
      <h2>
        Let me help you to choose a public transport ticket
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your username
          <input type="text" ref={inputEl}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default Welcome;
