import './App.css'; 
import {useState} from "react"; 


function App() {
    const [name, setName] = useState("Lemon")

    function changeName(){
    setName("Little Lemon")
}

    return(
    <>
        <h1>{name}</h1>
        <button onClick={changeName}>
            Change Name
        </button>
    </>);
}

export default App; 



