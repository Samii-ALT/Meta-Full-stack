import './App.css'; 
import { useEffect, useState } from "react";



function App(){

    const [toggle, setToggle] = useState(false)

const clickHandler = () => {
    setToggle(!toggle);
}

useEffect(() => {
    document.title = toggle ? "Welcome to little lemon" : "Using effect Hook"
}, [toggle])

    return(
    <div>
        <h1>Using effect Hook</h1>
        <button onClick={clickHandler}>
            Toogle
        </button>
        {toggle && <h2>Welcome to little lemon</h2>}
    </div>
    );
}

export default App;