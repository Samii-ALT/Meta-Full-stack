import logo from './logo.svg';
import './App.css';


function Example(){
  return(
    <div>
      <h1>{Math.random()>=0.5?"Over 0.5":"Under 0.5"}</h1>
    </div>
  )
}


function App() {
  return(
    <div className="app">
      <Example />
    </div>
  )
}

export default App;
