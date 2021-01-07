import './App.css';
import React, { useState } from 'react';



function App() {
  const [todos, setTodos] = useState(['Sacar el perro', 'Sacar la basura', 'inglés']);
  const [input, setInput] = useState('')

  const addTodo = event => {
    // this will fire off when we click the button
    event.preventDefault();
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>hello world!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={addTodo}>Add todo</button>
      </form>

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
