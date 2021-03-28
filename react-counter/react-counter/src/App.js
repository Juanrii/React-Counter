import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div class="container">
          <h1>Counter</h1>
          <span 
            style={{color: count >= 0 ? "green" : "red"}} 
            id="value"> {count}
          </span>
          <div class="button-container">
              <button 
                className="btn increase" 
                onClick={() => setCount(count + 1)}>Increment
              </button>
              <button 
                className="btn restart" 
                onClick={() => setCount(count - count)}>Restart
              </button>
              <button 
                className="btn decrease" 
                onClick={() => setCount(count - 1)}>Decrement
              </button>
          </div>
      </div>
    </div>
  );
};

export default App;
