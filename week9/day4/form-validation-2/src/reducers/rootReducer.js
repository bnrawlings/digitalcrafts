//inside of reducer is the default state

const initialState = {
    userName : "",
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERNAME":
        return {...state, userName: "Bob"}

        default:
            return state;
    }

};