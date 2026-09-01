import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState("10")

  const [messa, setMessa] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Number(score) < 5 && messa.length <= 10){
      alert("Please tell us what make your experince poor")
      return;
    }
    console.log("Form Submitted");
    setScore("10");
    setMessa("");
  }

  return (
  <div className='App'>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback</h2>
        <div>
          <label>Score: {score}⭐</label>
          <input type='range' min={0} max={10} value={score} onChange={e => setScore(e.target.value)} />
        </div>
        <div>
          <label>Comment: </label> <br></br>
          <textarea value={messa} onChange={e => setMessa(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  </div>
  );
}


export default App;