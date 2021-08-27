console.log("Connected!")

const bigContain = document.querySelector(".mainContain")
const searButton = document.querySelector(".searchButton")

async function getWeather(){
    const zipCode = document.querySelector(".input").value;
    const apiKey = "appid=0cc6786191441152c418fb0c525bc2f7";
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&${apiKey}&units=imperial`;
    const weatherData = await fetch (weatherURL);
    const jsonWeather = await weatherData.json();
    console.table(jsonWeather.main)
    const weatherwid = document.createElement("div");
    bigContain.append(weatherwid)
    weatherwid.className = "newWidget";
    const tempature = document.createElement("h4");
    tempature.innerHTML = jsonWeather.main.temp;
    newWidget.append(tempature)
    }


searButton.addEventListener("click", ()=>{getWeather();
})            
