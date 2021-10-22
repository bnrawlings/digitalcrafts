import { combineReducers } from 'redux';
import LoginInfo from './loginInfo';
import UserData from './userData';

const rootReducer = combineReducers({
   LoginInfo,
   UserData,
  })
    
 
  export default rootReducer;