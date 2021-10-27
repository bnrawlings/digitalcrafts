import SignUpForm from "./components/SignUpForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
function App() {
  const dispatch = useDispatch()
useEffect(()=>{
  getWeather()
}, []);
  const getWeather = async () => {
    const data = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=0cc6786191441152c418fb0c525bc2f7"
      
    );

    const json = await data.json();
    dispatch ({type: "WEATHER_DATA", payload: { json }});
    console.log (json)
  }
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}

export default App;

