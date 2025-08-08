import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(number + 1);

  const decrement = () => {
    if (number > 0) setNumber(number - 1);
  };

  const incrementByFive = () => setNumber(number + 5);

  const decrementByFive = () => {
    if (number >= 5) {
      setNumber(number - 5);
    } else {
      setNumber(0);
    }
  };

  const reset = () => setNumber(0);

  return (
    <div id="app-container">
      <h1 id="counter-heading">Count: {number}</h1>

      <div id="button-group">
        <button id="inc" onClick={increment}>+1</button>
        <button id="dec" onClick={decrement} disabled={number === 0}>-1</button>
        <button id="inc5" onClick={incrementByFive}>+5</button>
        <button id="dec5" onClick={decrementByFive} disabled={number === 0}>-5</button>
      </div>

      <button id="reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
