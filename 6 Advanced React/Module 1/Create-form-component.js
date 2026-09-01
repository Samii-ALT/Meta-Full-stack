import './App.css';
import { useState } from 'react';

function App(){

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("")
    console.log("Form Submitted")
  }

  return (
  <div className='App>'>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className='field'>
        <label>Name:</label>
        <input type='text' placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  </div>
  );
}


export default App;