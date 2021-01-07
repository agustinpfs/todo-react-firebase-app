import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';




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
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add TODO
        </Button>
      </form>

      <ul>
        {
          todos.map(todo => (
            <Todo text={todo} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
