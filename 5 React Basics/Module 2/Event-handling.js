import logo from './logo.svg';
import './App.css';
import Btn from './Btn';


// function App() {
//   function firstexample(){
//     console.log("First function example");
//   }
//   return(
//     <div className='First_example'>
//       <button onClick={firstexample}>
//         using a separate function declaration
//       </button>
//     </div>
//   );
// }


function App() {
    const second_click = console.log("Second function example");
  return(
    <div className='Second_example'>
      <button onClick={second_click}>
        using a separate function expression
      </button>
    </div>
  );
}

export default App;
