import logo from './logo.svg';
import './App.css';


function GetRandomNum() {
    return Math.floor(Math.random() *10) + 1
};

function App() {
  return(
    <div className="app">
      <GetRandomNum />
    </div>
  )
}

export default App;
