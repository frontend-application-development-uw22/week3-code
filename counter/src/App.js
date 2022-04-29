import React, {useEffect, useState} from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    for (let i = 0; i < increment; i += 1) {
      // console.log(count);
      // setCount(count + 1);
      setCount(prevState => prevState + 1);
    }
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => incrementCount(5)}>+</button>
    </div>
  )
}

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        return clearInterval(interval);
      }

      console.log('count', count);
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(interval);
  });


  return (
    <div>
      <h1>Countdown</h1>
      <h2>{count}</h2>
    </div>
  )
}

function App() {
  const [showCountdown, toggleCountdown] = useState(false);

  return (
    <div className="App">
      <Counter />
      <hr />
      <button onClick={() => toggleCountdown(!showCountdown)}>
        Toggle Countdown
      </button>
      {showCountdown ? <Countdown /> : null}
    </div>
  );
}

export default App;
