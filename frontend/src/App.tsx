import { useState } from "react";
import axios from "axios";
import "./App.css";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((currentCounter) => currentCounter + 1);
  }

  return (
    <div className="App">
      <span> Counter: {counter}</span>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
