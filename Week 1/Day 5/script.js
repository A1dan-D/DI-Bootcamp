let x = 1;
let y = 2;

let greeting = "Hello my name is Aidan";
console.log(x+y);
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let numCheck = Boolean(10>11);
let colors = ["blue", "green", "red", "brown"]
console.log(lorem.length);
console.log(lorem.substring(57, 100));
console.log(lorem.toUpperCase);
console.log(lorem.replace("Lorem", "Aidan"));
console.log(lorem.charAt(100));
console.log(x.toString());
console.log(numCheck);
console.log(colors[1]);
let pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets[1]);
pets.splice(3, 1, "horse");
console.log(pets);
console.log(pets.length);

let promptAnswer = prompt("how old are you?");
console.log("The user is " + promptAnswer + " years old.");
let userInfo = {fname:"Aidan", lname:"Dilworth", age:26, favoriteAnimal:"Dog"};
console.log(userInfo.fname);