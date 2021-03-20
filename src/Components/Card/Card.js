import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Card = (props) => {
    const  {listOfTodos, updateTodos} = props;


    const deleteTodo=(id)=>{
        fetch(`/api/${id}`,{
            method: 'POST',
            body: JSON.stringify({
            id:id
            })
        }).then(response=>response.json())
            .then(data=>{
                console.log(data)
                updateTodos()
            })
    }



    return (
        <>
        {
            listOfTodos.map(todo=>(
                <List>
                    <ListItem key={todo.id}>
                    <ListItemText primary={todo.content} />
                    <ListItemSecondaryAction>
              <IconButton onClick={()=>deleteTodo(todo.id)} edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
                </ListItem>
                </List>
            ))
        }
        </>
    )
}

export default Card
