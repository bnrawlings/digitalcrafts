console.log("connected!")

const mainCon = document.querySelector(".mainContain")
const searchBtn = document.querySelector(".searBtn")

// API for drinks data
const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"

//    Async Function for retriving data from API above

async function getDrinks(){
    const sInput = document.querySelector(".input").value;
    const drinkData = await fetch (drinkURL + `s=${sInput}`);
    const jsonDrink = await drinkData.json ();
    console.table(jsonDrink)

    mainCon.innerHTML = "";
    // For loop for drink data that also accomplished DOM manipulation with data grabbed from API
   for(const drink of jsonDrink.drinks){
       
       const glassCon = document.createElement("div");
       const drinkName = document.createElement("h3");
       const drinkType = document.createElement("h4");
       const drinkIngred = document. createElement("ul");
       const drinkInstruc = document.createElement("p");
       const drinkImg = document.createElement("img");
       drinkName.innerHTML = drink.strDrink;
       drinkType.innerHTML = drink.strAlcoholic;
       drinkIngred.innerHTML = [drink.strIngredient1,  drink.strIngredient2,  drink.strIngredient3,  drink.strIngredient4,  drink.strIngredient5 ];
       drinkInstruc.innerHTML = drink.strInstructions;
       drinkImg.src = drink.strDrinkThumb;
       glassCon.append(drinkImg, drinkName, drinkType, drinkIngred, drinkInstruc);
       mainCon.append(glassCon);
       

   }


}
        // attached call function to submit button to execute above async function
searchBtn.addEventListener("click", () => getDrinks());