
document.getElementById('throw-dice').addEventListener("click", throwDice);

// Create a function so that dice throw can be fired on a button click
function throwDice (){
  //Set variables - one for each die, the throw count, the number of doubles and the page divs to write to
  var die1, die2, count = 0, amountOfDoubles = 0;
  var diceDiv = document.getElementById('dice-div');
  var dblSix = document.getElementById('dbl-six');

  // Clear Double six message and die div's from previous throw on each new button click
  dblSix.innerHTML = "";
  diceDiv.innerHTML = "";

  // Use a loop to do the writing of the images to the page.
// Because we don't know how many times it will take to roll a double 6,  use a do while loop (or while) rather than a for/for each loop
do {
// Inside the loop "roll the dice" by setting each var using math rand (1-6)
  die1 = rollDie();
  die2 = rollDie();
  // Write the images to the page
  diceDiv.innerHTML += "<img src='images/dice-" + die1 + ".png'>";
  diceDiv.innerHTML += "<img src='images/dice-" + die2 + ".png'>";


  if (die1 === die2 && die1 != 6){ // don't count the final sixes
    amountOfDoubles++;
  }

  // Increase the throw count per throw
  count++;
} while (die1 + die2 != 12);
// Stop the loop once two sixes have been thrown

// write how many throws it took to throw a double six
dblSix.innerHTML += "<h3>There were " + amountOfDoubles + " double(s) rolled</h3>";
dblSix.innerHTML += "<h2>It took " + count + " throw(s) to get double sixes!</h2>";

// Math random function to be used to create each dice number
function rollDie(){
  return Math.round(Math.random() * 5) + 1;
}
}


// var diceButton = document.getElementById("throw-dice");
// var diceDiv = document.querySelector(".dice-div");
// var dblSix = document.getElementById("dbl-six");
// var six = 'dice-6';
// var numberOfThrows = 1;
// // diceButton.addEventListener("click", throwDblSix);
// var theDice = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6'];
// var currentDice1 = 'dice-1';
// var currentDice2 = 'dice-2';
// // function throwDblSix(){
// while (currentDice1 !== 'dice-6' && currentDice2 !== 'dice-6') {
//   // console.log(currentDice1 + ', ' + currentDice2);
//   var randomDice1 = Math.floor(Math.random() * 5)+1;
//   var randomDice2 = Math.floor(Math.random() * 5)+1;
//   currentDice1 = theDice[randomDice1];
//   currentDice2 = theDice[randomDice2];
//   diceDiv.innerHTML += "<div class='dice " + currentDice1 + "'" + "></div>";
//   diceDiv.innerHTML += "<div class='dice " + currentDice2 + "'" + "></div>";
//   numberOfThrows = numberOfThrows +1;
// }
// // diceDiv.innerHTML += "<div class='dice " + six + "'" + "></div>";
// // diceDiv.innerHTML += "<div class='dice " + six + "'" + "></div>";
// dblSix.innerHTML += "<div> <h1>You Threw A Double Six!!</h1><h2> It took " + numberOfThrows + " throw(s)... </h2> </div>";
// // console.log('Threw a Double Six!');
// // console.log(numberOfThrows);










