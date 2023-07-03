import React, {useEffect, useState, useContext, createContext} from 'react';

interface ContextValues {
    count: number,
    setCount: (count: number) => void
}

const CounterContext = createContext<ContextValues>({count: 0, setCount: () => {}});

interface ButtonProps {
    text: string
}

const Button = ({text}: ButtonProps) => { // component 2
    const {count, setCount} = useContext(CounterContext);
    return (
        <button onClick={() => setCount(count + 1)}>
            {text}
        </button>
    )
};

const CounterValue = () => { // component 4
    const {count} = useContext(CounterContext);
    return(
        <h3>{count}</h3>
    );
};

const Value = () => { // component 3
    return(
        <>
            <p>The counter value is:</p>
            <CounterValue/>
        </>
    );
}

const ComplexCounter = () => { // component 1
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Number(localStorage.getItem('complexCounter')));
    }, []);

    const setComplexCount = (count: number) => {
        setCount(count);
        localStorage.setItem('complexCounter', String(count));
    }

    return(
        <div className="complex-counter-container">
            <CounterContext.Provider value={{count, setCount: setComplexCount}}>
                <Button
                    text="Click me!"
                />
                <Value/>
            </CounterContext.Provider>
        </div>
);
}

export default ComplexCounter;
