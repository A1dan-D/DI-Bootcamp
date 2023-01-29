let info = {username:"Aidan_D", password:"password"};
let database = [info];
let newsfeed = [
    {username:"Aidan", timeline:2},
    {username:"Frankie", timeline:6},
    {username:"Delia", timeline:9}
]

let favFood = "tacos";
let favMeal = "lunch";
console.log("I eat " + favFood + " at every " + "favMeal");


const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2];
console.log("I watched " + myWatchedSeriesLength + " series: " + myWatchedSeriesSentence);
myWatchedSeries.splice(2, 1, "freinds")
myWatchedSeries.push("the office");
myWatchedSeries.unshift("breaking bad");
myWatchedSeries.splice(1, 1,);
console.log(myWatchedSeries[2].charAt(2));
console.log(myWatchedSeries);


let celTemp = 10;
let fahrTemp = (celTemp / 5) * 9 + 32;
console.log(celTemp + "°C is " + fahrTemp + "°F")

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23
    // Actual: 55

typeof(15)
// Prediction: number
// Actual:

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: undefined
// Actual: number

typeof("hello")
// Prediction: string
// Actual: strong

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: Nan

"1" + "3"
// Prediction: 13
// Actual: '13'

"1" - "3"
// Prediction: undefined
// Actual: NaN

"johnny" + 5
// Prediction: undefined
// Actual: NaN

"johnny" - 5
// Prediction: undefined
// Actual: NaN

99 * "hello"
// Prediction: undefined
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: false
// Actual: true

1 === "1"
// Prediction: true
// Actual: false


5 + "34"
// Prediction: NaN
// Actual:'534'

5 - "4"
// Prediction: NaN
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: '  '

" " + 0
// Prediction: 0
// Actual: ' 0'

true + true
// Prediction: NaN
// Actual: 2

true + false
// Prediction: NaN
// Actual: 1

false + true
// Prediction: NaN
// Actual: 1

false - true
// Prediction: NaN
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN