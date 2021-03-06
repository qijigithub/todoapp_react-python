import React,{useState,useEffect} from 'react';
import Card from '../Components/Card/Card';
import Form from '../Components/Form/Form';
import { Container, Typography  } from '@material-ui/core';

const TodoPage = () => {
    const [todo,setTodo] = useState([]);
    const [addTodo,setAddTodo] = useState('')
    useEffect(() => {
        fetch('/api').then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(data=>setTodo(data))
    },[])

    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue);
    }

    const handleFormSubmit = ()=>{
        fetch('/api/create',{
            method:'POST',
            body: JSON.stringify({
                content: addTodo
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then(message=>{
            console.log(message)
            setAddTodo('')
            getLastTodos()
        })
    }

    const updateTodos =()=>{
        getLastTodos()
    }

    const getLastTodos = ()=>{
        fetch('/api').then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(data=>setTodo(data))
    }
    return (
        <div>
        <Container  maxWidth='md'>
        <Typography variant="h2"  gutterBottom>
        To do list
      </Typography>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
            <Card listOfTodos={todo} updateTodos={updateTodos}/>
        </Container>
        </div>
    )
}

export default TodoPage
