import Neighborhood from "./components/neighborhood/Neighborhood";
import Dealership from "./components/dealership/Dealership";
import { useState } from "react";
import "../src/App.css"


function App() {
  // const mustang = "1967 Mustang boss 302"
   const fordGt = "2021 Ford GT"
  const [mustang, setMustang] = useState("2021 Mustang Gt")
  return (
    <div className="box">
      <h1>App.js</h1>
      {mustang}
      <Neighborhood mustang={mustang}/>
      <Dealership mustang={mustang} fordGt={fordGt}/>
    </div>
  );
}

export default App;
