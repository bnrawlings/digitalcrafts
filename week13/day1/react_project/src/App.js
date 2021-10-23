import {  useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"


import Booking from "./components/Booking";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { AppDiv, SectionsDiv } from "./styled-components/HeaderStyled"
import Cart from "./components/Cart";
import Login from "./components/Login";



function App() {
  const register = true
  const user = useSelector((state) => state.LoginInfo.loginInfo);
  return (
    <Router>
      <Switch>
    <AppDiv className="App">
      <Header/>
      <SectionsDiv className="sections">
        <Route  path="/home">
          <Login/>
          <Main />
          <Products />
          <Booking />
          <Contact />
          <Cart/>
        </Route>
        <Route path = "/products">
        <Products />
        </Route>
        <Route path = "/appointments">
          <Booking />
        </Route>
        <Route path = "/contact">
          <Contact />
        </Route>
        <Route path = "/cart">
          <Cart/>
        </Route>
      </SectionsDiv>
    </AppDiv>
    </Switch>
    </Router>
  );
}

export default App;
