const initialState = {}

const UserData = (state=initialState, action) => {
    switch(action.type){
        case "GET_USER":
            return {...action.payload}

    default:
        return state
    }
}
export default UserData