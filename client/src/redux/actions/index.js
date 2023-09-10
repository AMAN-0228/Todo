import axios from 'axios'
import { ADDNew_TODO, GET_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TABS } from './type'

const API_URL = 'http://localhost:8000'

export const addNewTodo = (data)=> async(dispatch)=> {
    try {
        const res = await axios.post(`${API_URL}/todos`,{data})
        dispatch({type : ADDNew_TODO,payload : res.data})
        
    } catch (error) {
        console.log("Error posting the todo",error)
    }
}

export const getAllTodo = ()=> async(dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`)
        dispatch({type:GET_TODOS,payload:res.data})
    } catch (error) {
     console.log("Error in fetching all todos",error.message)   
    }
}

export const toggleTodoDone =  (id) => async(dispatch)=>{
    try {
        const res = await axios.get(`${API_URL}/todo/${id}`)
        dispatch({type:TOGGLE_TODO,payload:res.data})
    } catch (error) {
        console.log("Error while toggling todo",error.message)
    }
}
export const updateTodo =  (id,data) => async(dispatch)=>{
    try {
        const res = await axios.put(`${API_URL}/todo/${id}`,{data})
        dispatch({type:UPDATE_TODO,payload:res.data})
    } catch (error) {
        console.log("Error while updating todo",error.message)
    }
}
export const deleteTodo =  (id,data) => async(dispatch)=>{
    try {
        const res = await axios.delete(`${API_URL}/todo/${id}`,)
        dispatch({type:DELETE_TODO,payload:res.data})
    } catch (error) {
        console.log("Error while deleting todo",error.message)
    }
}

export const toggleTabs = (tab)=> async(dispatch) => {
    dispatch({type : TOGGLE_TABS, selected : tab})
}