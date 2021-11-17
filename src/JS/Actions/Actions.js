import {INCREMENT,DECREMENT,RESET,TOGGLE,INIT} from '../Constants/ActionType'
export const increment=()=>{
    return{type:INCREMENT}
}
export const decrement=()=>{
    return{type:DECREMENT}
}
export const reset=()=>{
    return{type:RESET}
}
export const toggle=()=>{
    return{type:TOGGLE}
}
export const init=(initvalue)=>{
    return{type:INIT,payload:initvalue}
}