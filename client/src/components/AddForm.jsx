import React, { useState } from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { addNewTodo } from '../redux/actions';
const AddForm = () => {
    const [text, setText] = useState('');
    const dispatch =  useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addNewTodo(text))
        setText('')
    }
    const handleChange = (e)=>{
        setText(e.target.value)
    }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder='Enter new Todo ....' value={text} onChange={handleChange}/>
        {/* <button type="submit">Add</button> */}
      </Form>
    </>
  )
}

export default AddForm

const Form = styled.form`
    input{
        font-size : 20px;
        width : 100%;
        border : none;
        outline : none;
        border-bottom : 1px solid #2c3e50;
        padding : 5px;
    }
`