import * as actionType from '../actions/type'


export const todoReducer = (state =[],action)=>{
    switch (action.type) {
        case actionType.ADDNew_TODO:
            return [action.payload,...state]
        case actionType.GET_TODOS:
            return [...action.payload]
        case actionType.TOGGLE_TODO:
            return state.map(todo=>{
                return todo._id === action.payload._id?{...todo, done:!todo.done}:todo
            })
        case actionType.UPDATE_TODO:
            return state.map(todo=>{
                return todo._id === action.payload._id?{...todo, data:action.payload.data}:todo
            })
        case actionType.DELETE_TODO:
            return state.filter(todo => todo._id !==action.payload._id)
        default:
            return state
    }
}