import './App.css';
import { useState } from "react"
import StudentContainer from './components/StudentContainer';

// data is hard-coded in this file
// local state is only avaliable  locally 
// and passed through props
 const data = [
  {name: "Jose"},
  {name: "Britt"},
  {name: "Matt"},
  {name: "Dustin"},
  {name: "Justin"},
  {name: "Kayla"},
  {name: "Deanna"},
  {name: "Cameron"},
  {name: "Tim"},
  {name: "Ron"},
  {name: "Jamie"},
  {name: "Brande"},
  {name: "Jordan"},
  {name: "Xavier"},
  {name: "Pamela"},
  {name: "Jenny"},
]

function App() {

  const [students, setStudents] = useState(data)
  // state is a pllace that we can store/hold data
  // we store state in functional componenets using hooks (useState Hook)
  // the process of passing data(in state) 
  // to another component is called props
  return (
    <div className="App">
      <h1>App js</h1>
      <h3>Data starts Here</h3>
      {/* // If a component invokes another component 
      // it immedietly becomes it's parent
      // parents pass down data */}
      <StudentContainer students={students}/>
    </div>
  );
}

export default App;
