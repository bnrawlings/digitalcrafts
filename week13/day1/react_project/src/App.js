import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"


import Booking from "./components/Booking";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { AppDiv, SectionsDiv } from "./styled-components/HeaderStyled"



function App() {
  return (
    <AppDiv className="App">
      <Header/>
      <SectionsDiv className="sections">
        <Main/>
        <Products/>
        <Booking/>
        <Contact/>
      </SectionsDiv>
    </AppDiv>
  );
}

export default App;
