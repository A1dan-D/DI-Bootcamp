// for(i=0; i<=15; i++){
    // if (i%2 === 0){
    //     console.log(i+" is even")
    // }
    // else {
    //     console.log(i+" is odd")
    // }

// }

let person = {fname:"John", lname:"Doe", age: 25};
for(let x in person){
    console.log(x + ": " + person[x])
}
console.log(Object.entries(person));
Object.entries(person).forEach((item)=>{
    console.log(item[0] + ": " + item[1])
});


let n=0;
while(n<3){
    n++;
    console.log(n)
}

let colors = ["Blue", "Yellow", "Pink", "Red", "Orange", "White", "Brown"]
colors.forEach((color, i)=>{
    console.log(color + " at position: " + i);
})

let x = 5;
let y = 2;
if(x>y){
    console.log("x is the biggest number");
}
else{
    console.log("y is the biggest number");
}

let newDog = "Chihuahua"
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if(newDog == "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed")
}
else{
    console.log("I dont care, I prefer cats")
}

// let number = prompt("Number:");{
//     if (number%2 === 0){
//         console.log(number+" is even")
//     }
//     else {
//         console.log(number+" is odd")
//     }
// }

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if(users.length==0){
    console.log("no one is online")
}
else if (users.length == 1){
    console.log(users[0] + " is online")
}
else if (users.length == 2){
    console.log(users[0] + " and " + user[1] + "are online")
}
else if (users.length>2){
    console.log(users[0] + ", " + users[1] + " and " + (users.length-2+1)  + " more are online")
}

for(i=0; i<10; i++){
    console.log(i+1);
}

let alphabet = "abcdefghijklmnopqrstuvwxyz"
for(i=0; i<=25; i++){
    console.log(alphabet[i])
}

for (i=0; i<10; i++){
    i+2;
    console.log(i);
}