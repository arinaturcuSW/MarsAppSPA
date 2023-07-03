import React, {useEffect, useState} from 'react';
import "./counter.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Number(localStorage.getItem('counter')));
    }, []);

    const increment = () => {
        localStorage.setItem('counter', String(count + 1));
        setCount(count + 1);
    }

    return(
        <div className="counter-container">
            <p>{`You clicked ${count} times. Congrats!`}</p>
            <button onClick={increment}>Click me!</button>
        </div>
    );
};

export default Counter;
