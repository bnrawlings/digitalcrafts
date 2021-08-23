// Write a madlib function, which is given a name and a subject. 
// It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// function madLib (name, subject){
//     return name, subject;
// }
// console.log(madLib(Brittney, english))

// Write a function tipAmount that is given the bill amount 
// and the level of service (one of good, fair and poor) 
// and returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%

function tipAmount(billTotal, levelofService){
    let levelofService = good, fair, bad;
    good =20
    fair =15
    bad =10
    let percentConvert = levelofService / 100;
    let tipTotal = billTotal * percentConvert
    console.log("Your tip is $", tipTotal)
}
tipAmount(200, fair)