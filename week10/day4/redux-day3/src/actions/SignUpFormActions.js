import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions-types/counter-types";


export const ConsoleLogVariable =(name) => {
    console.log (name);
}

export const IncrementCounter = (dispatch) =>{
   
    dispatch({type: INCREMENT_COUNTER})
}

export const DecrementCounter = (dispatch) =>{
    
    dispatch({type: DECREMENT_COUNTER})
}