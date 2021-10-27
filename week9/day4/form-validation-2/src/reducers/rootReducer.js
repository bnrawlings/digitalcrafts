// reducers, they contain your default state
import { combineReducers } from 'redux'
import UserData from './userData';
import graphData from './graphData';
import LoginInfo from './loginInfo';

// const initialState = {
//     userName: "",
//     userEmail: "",
//     userAddress: "",
//     restaurants: "",
//     userData: {},
//   };
  // useDispatch()
  
  // {type: ""}
  const rootReducer = combineReducers({
    UserData,
    graphData,
    LoginInfo,
  });
  
  export default rootReducer;