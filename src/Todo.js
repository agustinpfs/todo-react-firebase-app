import { Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, ImageIcon } from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from './firebase';

function Todo(props) {
    return (
        <List>
            <ListItem className='todo__list'>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary='todo...' />
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE</Button>
        </List>
    )
}

export default Todo