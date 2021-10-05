const intialState = {
    mustang: "1967 Mustang boss 302",
    fordGt: "2021 Ford Gt",
    bugatti: "2021 Bugatti Chiron",
    kawasaki: "zrx1200",
};

const rootReducer = (state = intialState, action) =>{

        switch (action.type) {
            //compare the value to a list or criteria
            //those critera are called cases
            case "GET_BUGATTI":
                return state.bugatti
            case "GET_FORDGT":
                return state.fordGt
            case "GET_MUSTANG":
                return state.mustang
            case "CHANGE_KAWASAKI":
                return {...state,kawasaki:"ninja 250"}
            default:
                return state    
        }
};

export default rootReducer;