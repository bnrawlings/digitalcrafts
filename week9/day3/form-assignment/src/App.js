import { useState } from "react";
import SignupForm from "./components/Signup";
import DB from "./components/DB";

function App() {
  const [signupForm, setSignupForm] = useState({});
  const [userInfo, setUserInfo] = useState([]);
  

  return (
    <div className="App">
     <SignupForm signup ={signupForm} setSignup={setSignupForm} users={ userInfo } setUser={ setUserInfo }/>
     <DB users={ userInfo } setUser={ setUserInfo }/>
    </div>
  );
}

export default App;
