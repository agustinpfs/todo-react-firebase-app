import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';




function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the db and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []); // we lets empty because we add a listener to db
  // }, [input]); // [input] -> fires when input change

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
