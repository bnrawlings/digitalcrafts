import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions-types/counter-types";

const intialState = {
    counter : 0
};

const Counter = (state = intialState, action) => {
    switch (action.type){
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
                return state - 1;    
        default :
        return state;
    }
};
export default Counter