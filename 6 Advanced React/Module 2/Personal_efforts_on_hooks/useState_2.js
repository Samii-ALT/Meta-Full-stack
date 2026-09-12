import './App.css'; 
import { useEffect, useState, useReducer, useRef } from "react";


function App(){

    const [inputValue, setInputValue] = useState("");


return(
    <div>
       <input type='text' placeholder='Type something...'
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)} />
       <h4>You typed: <strong>{inputValue}</strong></h4>
    </div>
)
}

export default App;