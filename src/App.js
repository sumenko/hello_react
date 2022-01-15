import React, {useState} from 'react';

function App() {
  const [likes, setLikess] = useState(5);
  const [value, setValue] = useState('hello world');
  function Increment(){
    setLikess(likes+1);
  }
  function Decrement(){
    setLikess(likes-1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <input 
        type="text"
        value={value}
        onChange={evenat => setValue(evenat.target.value)}
      />
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default App;
