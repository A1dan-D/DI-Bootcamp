const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(3, 1, "Jason");
people.push("Aidan");
console.log(people);
console.log(people.slice(1));
console.log("Foo".indexOf())
let last = people[people.length-1];
console.log(last);
for(i=0;i<people.length;i++){
    console.log(people[i]);
}


let colors = ["black", "orange", "blue", "green", "purple"];
for(i=0;i<colors.length;i++){
    console.log(`My #${i} choice is ${colors[i]}`);
}


// let number = prompt("Pick a number");
// if(number<10){
//     let newNumber = 0;
//     while(newNumber<10){
//         newNumber = prompt("Pick a new number");
//     }
// }


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log((building.numberOfAptByFloor.firstFloor)+(building.numberOfAptByFloor.secondFloor));
console.log(building.nameOfTenants[1] + ", " + building.numberOfRoomsAndRent.dan[0])
if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan.splice(1,1, 2200);
}

let family = {mother: "Stephanie", father: "Matt", Me: "Aidan", sister: "Sophia", brother: "Eli"}
for(let x in family){
    console.log(x + ": " + family[x]);
}


const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }


let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
console.log(names[0][0] + names[1][0] + names[2][0] + names[3][0] + names[4][0] + names[5][0])

function greeter(name){
    console.log("Hello my name is " + name);
}
greeter("aidan");

function calc(x, y){
    console.log(x/y);
}
calc(4,2);

function age(myAge){
    let mom = 2*myAge;
    let dad = mom*1.2
    console.log(`My mom is  ${mom} years old and my dad is ${dad} years old `);
}

console.log(age(18));

