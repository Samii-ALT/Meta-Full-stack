import './App.css';
import { useState } from 'react';

const ToDo = props => (
  <tr>
    <td>{props.id}</td>
    <td>
      <input />
    </td>
    <td>{props.createAt}</td>
  </tr>
);

function App() {
  const [toDo, settoDo] = useState([
    {
      id: "todo1",
      createAt: "18:01"
    },
    {
      id: "todo2",
      createAt: "21:35"
    }
  ]);

  const reverseOrder = () => {
    settoDo([...toDo].reverse());
  };

  return (
    <>
      <button onClick={reverseOrder}>Reverse</button>

      <table>
        <tbody>
          {toDo.map((todos) => (
            <ToDo
              key={todos.id}
              id={todos.id}
              createAt={todos.createAt}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;