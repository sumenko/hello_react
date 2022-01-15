import React, {useState} from 'react';

const Counter = function(){
    const [likes, setLikes] = useState(42);
    function Increment(){
        setLikes(likes+1);
    }
    function Decrement(){
        setLikes(likes-1);
    }
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={Increment}>plus</button>
            <button onClick={Decrement}>minus</button>
        </div>
    )
};

export default Counter;