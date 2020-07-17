/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 20;
if (votingAge > 18) {
    console.log(true)
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let dog = "Sofie";
let dogFur = "red";
if ( dogFur != "Fluffy Black & white" ) {
    dog = "Defintely not Sofie";
}
console.log(dog)


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
const strToInt = parseInt ("1999", 0)
const name = "Josh"
console.log(typeof name, strToInt);




//Task d: Write a function to multiply a*b

function multiply (a, b) {
    return a * b;
}
console.log(multiply(10, 20))


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

let ageConverter = (humanAge) => humanAge * 7;
console.log("I am " + ageConverter(32) + " in dog years.");

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996


let dogFeeder = function (age, weight) {
    if (age >= 1) {
        if (weight <= 5) {
            feed = weight * .05;
        } else if (5 < weight && weight <= 10) {
            feed = weight * .04;
        } else if (10 < weight && weight <= 15) {
            feed = weight * .03;
        } else if (weight > 15) {
            feed = weight * .02;
        }
    } else if ((2/12) < age && age < (4/12)) {
        feed = weight * .1;
    } else if ( (4/12) <= age && age < (7/12) ) {
        feed = weight * .05;
    } else if ( (7/12) <= age && age < 1 ) {
        feed = weight * .04;
    }
    console.log("Feed Me " + feed + " pounds of raw food a day");
}
dogFeeder(1, 15);

//Extra cleaned solution, from working w Yetti

let dogFeeder2 = function (age, weight) {
    if (typeof age !== 'number') {
      throw new Error ("Please try again with dog's age")
    }
    if (typeof weight !== 'number') {
      throw new Error ("Please try again with dog's weight")
    }
    if (age < 2 / 12) {
      return 'nursing'
    } else if ( age < 4 / 12 ) {
      return weight * .1;
    } else if ( age < 7 / 12 ) {
      return weight * .05;
    } else if ( age < 1 ) {
      return weight * .04;
    } else {
      if ( weight <= 5 ) {
        return weight * .05;
      } else if ( weight <= 10 ) {
        return weight * .04;
      } else if ( weight <= 15 ) {
        return weight * .03;
      } else {
        return weight * .02;
      }
    }
  }

  console.log("Feed Me " + dogFeeder2(1, 15) + " pounds of raw food a day");

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number


// sytax expanded bc it was frying my brain...
// 99% sure there's a more elegant solution in here. Excited to find it later.

let rockPaperScissors = function (playerChoice) {
    let computerNumber = Math.random();
    if ( computerNumber <= (1/3) ) {
        computerChoice = "Rock";
    } else if ( (1/3) < computerNumber && computerNumber <= (2/3) ) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors"
    }

    if ( playerChoice === "Rock" || playerChoice === "rock" ) {
        if ( computerChoice === "Rock" ) {
            result = "ties";
        } else if ( computerChoice === "Paper" ) {
            result = "loses";
        } else {
            result = "wins";
        }
    } else if ( playerChoice === "Paper" || playerChoice === "paper" ) {
        if ( computerChoice === "Rock" ) {
            result = "wins";
        } else if ( computerChoice === "Paper" ) {
            result = "ties";
        } else {
            result = "loses";
        }
    } else if ( playerChoice === "Scissors" || playerChoice === "scissors" ){
        if ( computerChoice === "Rock" ) {
            result = "loses";
        } else if ( computerChoice === "Paper" ) {
            result = "wins";
        }else {
            result = "ties";
        }
    } else {
        result = "cheated"
    }
    return result;
}
console.log(`Player ${rockPaperScissors("spock")}`);


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let metricConverter = function (miles) {
    return miles * 1.60934;
}
console.log(32 + " miles converts to " + metricConverter(32) + " kilometers" )
;


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

let feetToCentimeters = (feet) => {
    return feet * 30.48;
}
console.log(`feetToCentimeters returns ${feetToCentimeters(7)}`);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`


let annoyingSong = function (startingNumber) {
    let song = "";
    for (i = startingNumber ; i > 0 ; i--) {
        song = song + (i + " bottles of pop on the wall, " + i + " bottles of pop, take one down and pass it around, " + (i-1) + " bottles of pop on the wall. ")
    }
    return song;
}
console.log(annoyingSong(7))


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F


const convertGrade = function (numberGrade) {
    if (numberGrade >= 90){
        letterGrade = "A";
    } else if (numberGrade >= 80){
        letterGrade = "B";
    } else if (numberGrade >= 70){
        letterGrade = "C";
    } else if (numberGrade >= 60){
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }
    return letterGrade;
}
console.log(`Letter grade: `, convertGrade(60))

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

const vowels =["a", "e", "i", "o", "u"];

function vowelCounter (userInput) {
    let vowelCount = 0;
    for (let letter of userInput.toLowerCase()) {
        if (vowels.includes(letter)) {
           vowelCount++;
        }
    }
    return `This text contains ${vowelCount} vowels`;
}
console.log(vowelCounter(`My name is Josh and I am a super cool developer`))


// console.log(`vowel count at i ${i} & userArray[i]:${userArray[i]} and vowelcount = ${vowelCount}`);
// console.log("'" + userInput + "' contains " + vowelCount + " vowels.");

// console.log(`testing vowelCounter ${vowelCounter("Testing testing")}`);
// vowelCounter("who'd have thunk?");

//  const vowels = ["a", "e", "i", "o", "u"];
// function vowelCounter(text) {
//   let counter = 0;
//   for (let letter of text.toLowerCase()){
//     if (vowels.includes(letter)) {
//        counter++
//     }
// }
// return `The text contains ${counter} vowel(s)`
// }
// console.log(vowelCounter('I am a world-class developer using iterations'));
/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


