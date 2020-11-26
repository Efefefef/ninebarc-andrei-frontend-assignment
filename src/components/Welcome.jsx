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
    <div className="card-body">
      <h3 className="py-3">
        Let me help you to choose a public transport ticket
      </h3>
      <form className="d-flex justify-content-around align-items-baseline py-3" onSubmit={handleSubmit}>
        <p className="card-text">
          What's your name?
        </p>
        <input type="text" ref={inputEl}/>
        <button type="submit" className="btn btn-primary">Start</button>
      </form>
    </div>
  );
};

export default Welcome;
