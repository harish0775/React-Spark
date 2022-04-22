import React,{useRef} from 'react'
function App() {
  let inputRef=useRef(null);
  function controlInput()
  {
    //inputRef.current.value="abc"
  inputRef.current.style.color="red"
//   inputRef.current.focus()
  }
  return (
    <div className="App">
      <h1>useRef in React </h1>
      <input type="text" ref={inputRef} />
      <button onClick={controlInput}>Handle Input</button>
    </div>
  );

}

export default App;