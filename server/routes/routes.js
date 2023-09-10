import express from 'express'
import {addTodo, getAllTodo, toggleTodoDone, updateTodo, deleteTodo} from '../controller/todo-controller.js'

const route = express.Router()

route.post('/todos',addTodo)
route.get('/todos',getAllTodo)
route.get('/todo/:id',toggleTodoDone)
route.put('/todo/:id',updateTodo)
route.delete('/todo/:id',deleteTodo)


export default route