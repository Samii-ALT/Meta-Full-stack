import logo from './logo.svg';
import './App.css';
import sup from './sup.jpg';


function Im(props){
  const pic = <img src={sup} />;
  return pic;
}


function App() {
  return(
    <div className="app">
      <Im />
    </div>
  )
}

export default App;
