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
    
    

  for (const movie in jsonMovies.Search){
        const movieImg = document.createElement("img");
        const movieTitle = document.createElement("h3");
      // console.log(movie)
        movieTitle.innerHTML = movie.Title;
        movieImg.src = movie.Poster;
        movieDeckcon.append(movieTitle, movieImg);
      }
  }
  


searchButton.addEventListener("click", () => getMovies());
