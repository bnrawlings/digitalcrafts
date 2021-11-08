import {  useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"



import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { AppDiv, SectionsDiv } from "./styled-components/HeaderStyled"
import Cart from "./components/Cart";
import SideBar from "./components/SideBar";




function App() {
  
  return (
    <Router>
      <Switch>
    <AppDiv className="App">
      <Header/>
      <SectionsDiv className="sections">
        <Route  exact path="/home">
          <Main />
          <Products />
          <Contact />
          <Cart/>
        </Route>
        <Route path = "/products">
        <Products  />
        </Route>
        <Route path = "/cart">
          <Cart/>
        </Route>
        <Route path = "/contact">
          <Contact />
        </Route>
      </SectionsDiv>
    </AppDiv>
    </Switch>
    </Router>
  );
}

export default App;
