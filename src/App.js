import React, {useState} from 'react';

function App() {
  const [likes, setLikess] = useState(5);

  function Increment(){
    setLikess(likes+1);
  }
  function Decrement(){
    setLikess(likes-1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default App;
