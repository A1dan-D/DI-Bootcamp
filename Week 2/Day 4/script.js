// let numbers = [123, 8409, 100053, 33333333, 7]
// for(i=0; i<numbers.length; i++){
//     if(numbers[i]%3 == 0){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }

// // let guestList = {
// //     randy: "Germany",
// //     karla: "France",
// //     wendy: "Japan",
// //     norman: "England",
// //     sam: "Argentina"
// // }
// // let studentName = prompt("NAME:");
// // if(studentName in guestList){
// //     console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`)
// // }
// // else{
// //     console.log("Hi! I'm a guest.")
// // }
// let sum = 0;
// let highestNum = 0;
// let age = [20,5,12,43,98,55];
// for(i=0;i<age.length;i++){
//     sum += age[i]
//     if(age[i]>highestNum){
//         highestNum = age[i];
//     }  
// }
// console.log(sum);
// console.log(highestNum);

// function bmi(){
//    return (mass/(height*height));
// }
// let bob = {
//     fullName: "Bob Dog",
//     mass: 70,
//     height: 175,
//     BMI: function bmi(){
//         return (bob.mass/(height.bob*height.bob));
//      }
// }
// let rob = {
//     fullName: "Rob Smith",
//     mass: 70,
//     height: 0.75,
//     BMI: function bmi(){
//         return (mass.rob/(height.rob*height.rob));
//      }
// }
// console.log(bob.BMI());

// function infoAboutMe(){
//     console.log("My name is Aidan and I am 18 years old.");
// }
// inforAboutMe();

// infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}.`)
// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// function calculateTip(){
//     billAmount = prompt("Bill Amount:")
//     let tip = 0;
//     if (billAmount<50){
//         tip = billAmount*.2
//     }
//     else if (billAmount>=50 && billAmount<=200){
//         tip = billAmount*.15
//     }
//     else{
//         tip = billAmount*.10
//     }
//     let finalBill = Number(tip) + Number(billAmount)
//     console.log(`Tip: $ ${tip} `)
//     console.log(`Final Bill: $ ${finalBill} `)
// }
// calculateTip();

function isDivisble(divisor){
    let sum = 0;
    for(i=0;i<500;i++){
       
        if(i%divisor==0){
        console.log(i);
        sum+=i
        }
    }
    console.log("Sum: "+ sum)
}
isDivisble(70);

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"]
function myBill(){
    let priceSum = 0;
    for(i=0; i<shoppingList.length-1; i++){
        if(shoppingList[i] in stock && stock[shoppingList[i]]>0){
            priceSum += prices[shoppingList[i]]   
        }  
    }
    console.log(priceSum)
}
myBill();

function changeEnough(itemPrice, amountOfChange){
    let sumOfChange = 0;
    for (i=0; i<amountOfChange.length;i++){
        sumOfChange+=amountOfChange[i]
    }
    if(sumOfChange>itemPrice){
        return true
    }
    else{
        return false
    }
}
changeEnough(4.25, [25, 20, 5, 0])
console.log(4.25, [25, 20, 5, 0])


function hotelCost() {
    let nights = prompt("How many nights would you like to stay in the hotel?");
    while (isNaN(nights) || !nights) {
      nights = prompt("Please enter a valid number of nights.");
    }
    return Number(nights) * 140;
  }
  function planeRideCost() {
    let destination = prompt("Where would you like to go?");
    while (!destination || typeof destination !== "string") {
      destination = prompt("Please enter a valid destination.");
    }
    switch (destination) {
      case "London":
        return 183;
      case "Paris":
        return 220;
      default:
        return 300;
    }
  }
  function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");
    while (isNaN(days) || !days) {
      days = prompt("Please enter a valid number of days.");
    }
    let cost = days * 40;
    if (days > 10) {
      cost *= 0.95;
    }
    return cost;
  }
  function totalVacationCost() {
    let hotelStayCost = hotelCost();
    let planeCost = planeRideCost();
    let carCost = rentalCarCost();
    return hotelStayCost + planeCost + carCost;
  }
  console.log(`Your total vacation cost is: ${totalVacationCost()}`);