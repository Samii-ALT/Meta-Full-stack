import './App.css'; 
import {useState} from "react"; 


// function App() {
// const [greeting, setGreeting] = useState({ greet: "Hello, World" });
// function updateGreet() {
//     setGreeting({ greet: "Hello World wide web" })
// }
// return(
//     <div>
//         <h3>{greeting.greet}</h3>
//         <button onClick={updateGreet}>Update</button>
//     </div>
// )
// }


// ----------------------------------
//         Better approach
// ----------------------------------


function App () {
    const [greeting, setGreeting] = useState({ greet: "Hello, World" });
    function updateGreet() {
        const newGreeting = {...greeting};
        newGreeting.greet = "Hello world wide web"
        setGreeting(newGreeting);
    }

    return(
        <>
            <h2>{greeting.greet}</h2>
            <button onClick={updateGreet}>Update Greetings</button>
        </>
    )
}

export default App; 



