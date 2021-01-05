import './App.css';
import React, { useState } from 'react';



function App() {
  const [todos, setTodos] = useState(['Sacar el perro', 'Sacar la basura', 'inglés']);
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <h1>hello world!</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button>Add todo</button>

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
