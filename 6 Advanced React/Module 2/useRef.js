import './App.css'; 
import { useEffect, useState, useReducer, useRef } from "react";


function App(){

    const formInputRef = useRef(null);


    const focusInput = () => {
        formInputRef.current.focus();
    }

    return(
        <div>
            <h1>Using Useref to access underlying DOM</h1>
            <input ref={formInputRef} type='text' />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default App;