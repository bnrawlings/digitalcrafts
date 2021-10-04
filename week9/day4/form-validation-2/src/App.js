import Form from "./components/Form";
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

function App() {
  const [viewSidebar, setViewSidebar]= useState(true)
  return (
  <Router>
    <Switch>
    <MainContainer>
      <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
      <Sidebar viewSidebar={viewSidebar}/>
      <Route path='/form'>
      <Form />
      </Route>
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
      {/* <Route path='*'>
        <Redirect to='/errorpage'
          />
          </Route>
          <Route path='/errorpage'>
        <ErrorPage/>
      </Route> */}
    </MainContainer>
    </Switch>
  </Router>
  );
}

export default App;