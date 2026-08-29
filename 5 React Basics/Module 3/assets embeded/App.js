import logo from './logo.svg';
import './App.css';
import superman from "./assets/images/sup.jpg"


function App() {
  return(
    <>
    <h1>
      <img
        height={200}
        src={superman}/>
    </h1>

    <h1>
      <img
        height={200}
        src={require("./assets/images/sup.jpg")}/>
    </h1>
    </>
  )
}

export default App;
