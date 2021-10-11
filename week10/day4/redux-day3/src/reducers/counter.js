const intialState = {
    counter : 0
};

const Counter = (state = intialState, action) => {
    switch (action.type){
        case "INCREMENT_COUNTER":
            return state + 1;
        default :
        return state;
    }
};
export default Counter