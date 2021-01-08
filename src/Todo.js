import React, { useState } from 'react';
import { Modal, List, ListItem, ListItemText, makeStyles, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>I am modal</h1>
                    <Button onClick={e => setOpen(false)}>Update Todo</Button>
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