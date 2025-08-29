import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(10);

  function Addvalue() {
    if (counter < 20) {
      // counter++;
      setCounter(precounter=>precounter+1);
      setCounter((precounter) => precounter+1); 
      setCounter((precounter) => precounter+1);
    }
  }
  function Removevalue() {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Vite + React : {counter}</h1>
      <button onClick={Addvalue}>Add value: {counter}</button>
      <br></br>
      <button onClick={Removevalue}>Remove value: {counter}</button>
    </>
  );
}

export default App;
