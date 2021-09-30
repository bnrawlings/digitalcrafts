import logo from './logo.svg';
import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionalComponents from './components/FunctionalComponents';
import MyProfile from './components/MyProfile';


function App() {
  return (
    <div className="App">
      <ClassComponents/>
      
      <FunctionalComponents/>
      <MyProfile/>
    </div>
  );
}

export default App;
