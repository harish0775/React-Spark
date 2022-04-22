import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = ` ${count} count`;
  },[count]);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = ` ${inc} Inc`;
  },[inc]);
  return (
    <div>
      <p>You clicked {count} count</p>
      <p>You clicked {inc} Inc</p>
      <button onClick={() => setCount(count + 1)}>
        Click me 1
      </button>
      <button onClick={() => setInc(inc + 1)}>
        Click me 2
      </button>
    </div>
  );
}
export default App;