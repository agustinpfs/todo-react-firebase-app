import './App.css';
import React, { useState } from 'react';



function App() {
  const [todos, setTodos] = useState(['Sacar el perro', 'Sacar la basura', 'inglés']);
  const [input, setInput] = useState('')

  const addTodo = event => {
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>hello world!</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {
          todos.map(todo => (
            <li>{todo}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
