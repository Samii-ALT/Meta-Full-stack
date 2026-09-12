import './App.css'; 
import { useEffect, useState, useReducer, useRef } from "react";


function App(){

    const [count, setCount] = useState(0);

    function clickHandler() {
        setCount(count+1)
    }
return(
    <div>
        <h3>You Have clicked {count} times</h3>
        <button onClick={clickHandler}>Increment</button>
    </div>
)
}

export default App;