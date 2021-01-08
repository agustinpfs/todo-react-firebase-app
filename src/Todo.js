import { Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, ImageIcon } from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List>
            <ListItem className='todo__list'>
                <ListItemText primary={props.todo.todo} secondary='todo...' />
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE</DeleteForeverIcon>
        </List>
    )
}

export default Todo