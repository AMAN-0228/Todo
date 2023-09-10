import * as actionType from '../actions/type'

export const tabReducer = (state = actionType.ALL_TODOS,action) =>{
    switch (action.type) {
        case actionType.TOGGLE_TABS:
            return action.selected
    
        default:
            return state
    }
}