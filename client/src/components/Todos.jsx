import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getAllTodo } from '../redux/actions/index'
import Todo from './Todo'
import Tabs from './Tabs'
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from '../redux/actions/type'
import styled from 'styled-components'

const Todos = () => {
    const dispatch = useDispatch()

    const todos = useSelector(state=>state.todos)
    const currentTab = useSelector(state=>state.currentTab)


    useEffect(()=>{
        dispatch(getAllTodo())
    },[])
    const getTodos = () => {
        if(currentTab===ALL_TODOS){
            return todos;
        }else if(currentTab === DONE_TODOS){
            return todos.filter(todo => todo.done)
        }
        else if(currentTab === ACTIVE_TODOS){
            return todos.filter(todo => !todo.done)
        }
    }

    const removeDoneTodos = ()=> {
        todos.forEach(({done,_id}) => {
            if(done){
                dispatch(deleteTodo(_id))
            }
        });
    }
  return (
    <article>
        <Wrapper>
            <Tabs currentTab={currentTab}/>
            {
                todos.some(todo=>todo.done)?(
                    <Button
                    onClick={removeDoneTodos}
                    >
                        Remove Done Todos
                    </Button>
                ):null
                
            }
        </Wrapper>
      <ul>
        {
            getTodos().map((todo,i)=>{
                return <Todo key={i} todo={todo} />
            })
        }
      </ul>
    </article>
  )
}
const Wrapper = styled.div`
    display : flex;
    justify-content: space-around;
    grid-template-columns : repeat(4,1fr);
    .selected{
        color : #fff;
        background-color : #6c6777;
        border-radius : 5px;
    }
`

const Button = styled.button`
margin : 5px 10px;
padding : 10px;
text-align : center;
font-size : 14px;
border : none;
    cursor : pointer;
    border-radius : 5px;
    color: #fff;
    background-color : #ee1630;
`

export default Todos
