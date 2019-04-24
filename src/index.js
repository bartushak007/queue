import React from "react";
import ReactDOM from "react-dom";
import useQueues from "./useQueues";

import "./styles.css";

function App() {
  const { enqueue, dequeue, values, length } = useQueues();

  return (
    <div>
      {values().map(elem => (
        <div key={elem}>
          <span>{elem}</span>
          <br />
        </div>
      ))}
      <button onClick={() => enqueue(length)}>enqueue</button>
      <br />
      <button onClick={() => dequeue()}>dequeue</button>
      <br />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
