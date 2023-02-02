// let arr = ["daniel", "shoham", "joel", "kirsten", "deji", "aidan"]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let arr2 = ["daniel", "shoham", "joel", "kirsten", "deji", "aidan"]
// for(let i of arr2){
//     console.log(i);
// }

let person = {fname: "Aidan", lname: "Dilworth", favoriteFood: "Phad Thai", country: "USA"}
for(let x in person){
    console.log(x + ": " + person[x]);
}
console.log(`My name is ${person.fname}`)

// let i = 0;
// do{
//     console.log("The number is " + i);
//     i++
// }while (i<10);

let arr = ["daniel", "shoham", "joel", "kirsten", "deji", "aidan"]
arr.forEach((classNames,i) =>{
    console.log(`${classNames} is student number ${i+1}`);
});