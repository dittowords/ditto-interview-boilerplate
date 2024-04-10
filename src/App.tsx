import React, { useState } from "react";
import axios from "axios";
import "./App.css";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");

  function incrementCounter() {
    axios
      .get("/counter")
      .then((res) => {
        setCounter(res.data.counter);
      })
      .catch((err) => setError(err.message));
  }

  return (
    <div className="App">
      <span> Counter: {counter}</span>
      <button onClick={incrementCounter}>Increment</button>
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default App;
