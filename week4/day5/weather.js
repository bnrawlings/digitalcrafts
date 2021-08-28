console.log("Connected!")

const bigContain = document.querySelector(".mainContain")
console.log(bigContain)
const searButton = document.querySelector(".searchButton")
const weatherwid = document.createElement("div");
const inPut = document.querySelector(".input")

weatherwid.className = "newWidget";
const tempature = document.createElement("h2");

async function getWeather(){
    const zipCode = document.querySelector(".input").value;
    const apiKey = "appid=0cc6786191441152c418fb0c525bc2f7";
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&${apiKey}&units=imperial`;
    const weatherData = await fetch (weatherURL);
    const jsonWeather = await weatherData.json();
    console.table(jsonWeather.main)
    
    tempature.innerHTML = jsonWeather.main.temp.toFixed(0);
    bigContain.append(weatherwid)
    weatherwid.append(tempature, inPut, searButton)
    }


searButton.addEventListener("click", ()=>{getWeather();
})            
