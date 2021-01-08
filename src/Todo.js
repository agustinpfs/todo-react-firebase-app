import React, { useState } from 'react';
import { Modal, List, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css';
import db from './firebase';


function Todo(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    // const handleClose = () => {
    //     setClose(true);
    // };

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div>
                    <h1>I am modal</h1>
                    <button onClick={e => setOpen(false)}></button>
                </div>
            </Modal>
            <List>
                <ListItem className='todo__list'>
                    <ListItemText primary={props.todo.todo} secondary='todo...' />
                </ListItem>
                <button onClick={e => setOpen(true)}>EDIT</button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE</DeleteForeverIcon>
            </List>
        </>
    )
}

export default Todo