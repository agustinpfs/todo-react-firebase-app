import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';




function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the db and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []); // we lets empty because we add a listener to db
  // }, [input]); // [input] -> fires when input change

  const addTodo = event => {
    // this will fire off when we click the button
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() //marca la hora del servidor correcto
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Administrador de tareas</h1>
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
            <Todo todo={todo} /> //cambio string por objeto(delete)
          ))
        }
      </ul>
    </div>
  );
}

export default App;
