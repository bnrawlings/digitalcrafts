// console.log ("I'm connected")


const omdbUrl = "http://www.omdbapi.com/?apikey=a8956cc"

const movieDeckcon = document.querySelector(".movieDeck")
const searchButton = document.querySelector(".searchButton")

async function getMovies(){
    const input = document.querySelector(".inputField").value;
    const movieData = await fetch(omdbUrl);
    const jsonMovies = await movieData.json();
    console.table(jsonMovies)
    // const movieImg = document.createElement("img");
    // movieDeckcon.innerHTML = "";

//   for (const movie in jsonMovies.Search)
}

getMovies();
