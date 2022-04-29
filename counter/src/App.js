import React, {useState} from 'react';
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

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
