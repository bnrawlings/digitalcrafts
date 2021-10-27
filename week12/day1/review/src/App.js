import './App.css';
import { useState } from "react"
import StudentContainer from './components/StudentContainer';
import studentData from './studentData';
import { useDispatch, useSelector } from "react-redux"

// data is hard-coded in this file
// local state is only avaliable  locally 
// and passed through props
//  const data = [
//   {name: "Jose"},
//   {name: "Britt"},
//   {name: "Matt"},
//   {name: "Dustin"},
//   {name: "Justin"},
//   {name: "Kayla"},
//   {name: "Deanna"},
//   {name: "Cameron"},
//   {name: "Tim"},
//   {name: "Ron"},
//   {name: "Jamie"},
//   {name: "Brande"},
//   {name: "Jordan"},
//   {name: "Xavier"},
//   {name: "Pamela"},
//   {name: "Jenny"},
// ]

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const [inputValue, setInputValue] = useState (0)
  // const [students, setStudents] = useState(data)
  // state is a pllace that we can store/hold data
  // we store state in functional componenets using hooks (useState Hook)
  // the process of passing data(in state) 
  // to another component is called props
  return (
    <div className="App">
      <h1>App js</h1>
      <h3>Data starts Here</h3>
      {counter}
      <input onChange={(e) => setInputValue(parseInt(e.target.value))} type="number"/>
      <button onClick ={() => dispatch({type: "THE_COUNTER", payload : inputValue}) }>Increase Counter</button>
      {/* // If a component invokes another component 
      // it immedietly becomes it's parent
      // parents pass down data */}
      <StudentContainer />
    </div>
  );
}

// In REDUX an action is dispatched
// Middleware intercepts the action (this is perfect for API calls)
// after middleware is done with it, the action matches a reducer
// Reducers will then update state (reducers are the only thing that chages state in the store)
//the store will then send the updated state
// this will cause a rerender
export default App;
