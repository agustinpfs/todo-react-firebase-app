import './App.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';




function App() {
  const [todos, setTodos] = useState(['Sacar el perro', 'Sacar la basura', 'inglés']);
  const [input, setInput] = useState('')

  const addTodo = event => {
    // this will fire off when we click the button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello world!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add TODO
        </Button>
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
