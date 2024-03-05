import { awsRum } from "./rum";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AwsRum } from "aws-rum-web";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Count={count}</h1>
      <button
        onClick={() =>
          fetch("https://example.com").then(console.log).catch(console.log)
        }
      >
        Create Fetch 5xx Error
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment count: {count}
      </button>
      <button onClick={() => awsRum?.addSessionAttributes({ count: count })}>
        {" "}
        {`addSessionAttributes(\{count: ${count}\})`}
      </button>
    </div>
  );
}

export default App;
