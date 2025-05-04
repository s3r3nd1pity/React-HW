import './App.css'
import {useState} from "react";

function App() {
    // eslint-disable-next-line prefer-const
    let [counter, setCounter] = useState<number>(0);
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={
                ()=>{
                    setCounter(++counter);
                    console.log(counter);

                }
            }>increment</button>
            <button onClick={
                ()=>{
                    setCounter(--counter);
                    console.log(counter);

                }
            }>decrement</button>
        </>
    )
}

export default App
