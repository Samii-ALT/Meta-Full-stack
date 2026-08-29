import logo from './logo.svg';
import './App.css';


function App() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 21;
  let dayMessage;

  if(day.toLocaleLowerCase === "monday"){dayMessage = `Happy ${day}`}
  else if(day.toLocaleLowerCase === "monday"){dayMessage = `Happy ${day}`}
  else if(day.toLocaleLowerCase === "tuesday"){dayMessage = `${day}, four day to go`}
  else if(day.toLocaleLowerCase === "wednesday"){dayMessage = `${day}, Half way there`}
  else if(day.toLocaleLowerCase === "thursday"){dayMessage = `${day}, start planning the weekend`}
  else if(day.toLocaleLowerCase === "friday"){dayMessage = `${day} Woo - hoo weekend is coming`}
  else {dayMessage = `Stay calm and keep having fun`}

  return(
    <>
    <h1>{dayMessage}</h1>
    <h2>
      {morning ? <h2>Have you had breakfast yet?</h2> : ""}
    </h2>
    </>
  );
}

export default App;
