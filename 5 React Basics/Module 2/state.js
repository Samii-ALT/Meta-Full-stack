import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [num, setnum] = useState(0);
  
  return(
    <div className='Mian'>
      <h1>Current number: {num}</h1>
      <button onClick={() => setnum(num+1)}>Add 1</button>
      <button onClick={() => setnum(num-1)}>Subtract 1</button>
    </div>

  )
}

export default App;
