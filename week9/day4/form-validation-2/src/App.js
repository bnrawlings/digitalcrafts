import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { MainContainer } from "./styled-components/AppStyle";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import ErrorPage from "./components/ErrorPage";
import {useState} from'react';
import Account from "./components/Account";
import Garage from "./components/Garage";
import {  useSelector } from "react-redux";

function App() {
  const [viewSidebar, setViewSidebar]= useState(true)
  const register = true
  const user = useSelector((state) => state.LoginInfo.loginInfo);
  // const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  // console.log({user})
  return (
  <Router>
    <Switch>
    { user ?  ( 
    <>
    <Route path= "/register">
        <Login register ={register}/>
        </Route>
    <MainContainer>
      <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
      <Sidebar viewSidebar={viewSidebar}/>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route path='/dashboard'>
      <Dashboard/>
      </Route>
      <Route path='/account'>
      <Account/>
      </Route>
      <Route path='/garage'>
      <Garage/>
      </Route>
      </MainContainer>
      </>
      ) : (
      <Route path='/login'>
      <Login />
      </Route>
    )};
    </Switch>
  </Router>
    
  );
}

export default App;