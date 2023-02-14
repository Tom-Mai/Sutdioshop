import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if(count > 0 ){
        setCount(count - 1);
        }
    };
    const toZero = () => {
        setCount(0);
    }

    return (
        <div>
            <h5>{count}</h5>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={toZero}>Refresh</button>
            
        </div>
    )

};

export default Counter;