import {INCREMENT,DECREMENT,RESET,TOGGLE,INIT} from '../Constants/ActionType'


const initialState={counter:0,show:true}

export const counterReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case INCREMENT:
            return  {
                ...state,counter: state.counter+1
            }
            case DECREMENT:
            return  {
                ...state,counter: state.counter-1
            }
            case RESET:
            return  {
                ...state,counter: 0
            }
            case INIT:
            return  {
                ...state,counter: payload
            }
            case TOGGLE:
            return  {
                ...state,show:!state.show
            }
    
        default:
            return state
    }
}