import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const Form = ({userInput,onFormChange,onFormSubmit}) => {
    const handleChange =(event)=>{
        onFormChange(event.target.value);
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        onFormSubmit();
    }
    return (
        <TodoForm  onSubmit={handleSubmit}>
            <Box  width="90%" style={{display:'inline-block',textAlign:'center'}}>
            <TextField  label="Input the task need to do" required value={userInput} onChange={handleChange} fullWidth >
            </TextField>
            </Box>
            <Button variant="outlined" color="primary" type = 'submit' style={{display:'inline-block',marginTop:'30px'}}>Submit</Button>
        </TodoForm >

    )
}

const  TodoForm = styled.form`
padding:2px;
`

export default Form
