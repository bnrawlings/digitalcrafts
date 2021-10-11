//inside of reducer is the default state

const initialState = {
    userName : "",
    userEmail: "",
    userAddress: ""
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERNAME":
        return {...state, userName: action.payload}

        case "SET_USEREMAIL":
        return {...state, userEmail: "litty250@yoho.com"}

        case "SET_USERADDRESS":
            return {...state, userAddress: "123 main St"}

        default:
            return state;
    }

};