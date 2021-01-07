import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ImageIcon } from '@material-ui/core';
import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <List>
            <ListItem className='todo__list'>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary='Todo...' secondary={props.text} />
            </ListItem>
        </List>
    )
}

export default Todo