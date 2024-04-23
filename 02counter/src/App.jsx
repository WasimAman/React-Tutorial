import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    console.log("Clicked");
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
  };

  const subtractValue = () => {
    console.log("clicked");
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter = {counter}</h2>
      <button id="btn" onClick={addValue}>
        Add
      </button>
      <button onClick={subtractValue}>Subtract</button>
    </>
  );
}

export default App;
