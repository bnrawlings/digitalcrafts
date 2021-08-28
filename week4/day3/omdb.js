// console.log ("I'm connected")

const apiKey = "a8956cc"
const omdbUrl = `http://www.omdbapi.com/?apikey=${apiKey}`


const movieDeckcon = document.querySelector(".movieDeck")
const searchButton = document.querySelector(".searchButton")

async function getMovies(){
    movieDeckcon.innerHTML = "";
    
    
    const input = document.querySelector(".inputField").value;
    
    const movieData = await fetch(omdbUrl + `&s=${input}`);
    const jsonMovies = await movieData.json();
    console.log(jsonMovies)
    
    

  for (const movie in jsonMovies){
      const movieImg = document.createElement("img");
      console.log(movie)
      const movieTitle = document.createElement("h3");
      movieImg.src = movie.Poster;
      movieTitle.innerHTML = movie.Title;
      movieDeckcon.append(movieTitle, movieImg);
      
  }
  }


searchButton.addEventListener("click", () => getMovies());
