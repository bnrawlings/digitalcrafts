// Write a madlib function, which is given a name and a subject. 
// It will return(not print) a new string: (name)'s favorite subject in school is (subject).

function madLib (name, subject){
    console.log(`${name}"'s favorite subject in school is"${subject}`)
}
madLib(brittney, english)

// Write a function tipAmount that is given the bill amount 
// and the level of service (one of good, fair and poor) 
// and returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%

// const good =20
// const fair =15
// const bad =10

// function tipAmount(billTotal, levelofService){
//     let percentConvert = levelofService / 100;
//     let tipTotal = billTotal * percentConvert
//     console.log("Your tip is $", tipTotal)
// }
// tipAmount(200, fair)

// Write a function totalAmount that takes the same arguments as tipAmount except 
// it returns the total as the tip amount plus the bill amount. 
// This function may make use of tipAmount as a sub-task.
// const good =20
// const fair =15
// const bad =10

// function tipAmount(billTotal, levelofService){
//     let percentConvert = levelofService / 100;
//     let tipTotal = billTotal * percentConvert
//     console.log("Your tip is $", billTotal + tipTotal)
// }
// tipAmount(200, fair)

// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:
// const printNumbers =(start,stop) => {
//     for(let x = start; x<= stop; x++){
//         console.log (x)
//     }
// };
// printNumbers(1,10)
// While loop
// const printNumbers =(start,stop) => {
//     x = start
//     y = stop
//     while (x <= y){
//         console.log (x);
//         x++;
//     }
// };
// printNumbers(1,10)

// Write a function printSquare which is given 
// a size and prints a square of that size using asterisks.
// const printSquare = (size)=>{
//     for (let index = 0; index<size; index++){
//         let row = "";
//         for(let index = 0; index<size; index++){
//             row += "*";
//         }
//         console.log(row + "");
//     }
// };
// printSquare(5)

// Write function printBox which is given a width and height and prints 
// a hollow box of those given dimensions.
// const printBox = (width,height)=>{
//     for (let x=1; x<= width; x++){
//         for(let y=1; y <= height; y++){
//             if  (x==1 || x==width);
//             console.log("-");
//              if (y==1 || y==height)
//             console.log("|");
//             else
//                 console.log(" ")
//         }
//     }
// }
// printBox(6,4)

// Write a function printBanner which is given some text and prints a banner with a 
// border surrounding the text. The border has to stretch to the length of the text.

// const printBanner =(message)=>{
//    let dash = "-"
//    let format = `
//         ${dash}
//         ${message}
//         ${dash} 
   
//    `

// };
// printBanner()


