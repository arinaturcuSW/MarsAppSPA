import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nasa from "./components/Nasa";
import Counter from "./components/Counter";
import ComplexCounter from "./components/ComplexCounter";

import './App.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Nasa/>} />
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/complex-counter" element={<ComplexCounter/>}/>
        </Routes>
    );
}

export default App;
