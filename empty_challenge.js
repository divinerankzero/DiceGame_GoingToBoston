// Code Challenge: Create the dice game "Going to Boston"
//http://www.netexl.com/howtoplay/going-to-boston/

const rounds = 3
let diceToRoll = rounds

// Define a number of player objects
// containing the name string property

let players = [];

// This stuff will change every player, every round
let rolls = [];
let roundHighest = 0;

// Define the Function rollDie 
// (to roll a single six sided die)
// creating a random number between 1 and 6
// Research hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function rollDie() {

}

// Define a function called "roundOfRolls"
// that performs a single round of rolling
// By looping over the "rollDie" function 
// a number of times equal to the "diceToRoll" variable
// and pushing each die result to the "rolls" array
// return the "rolls" array
function roundOfRolls() {

}

// Define a function called "determineHighest"
// that loops through the "rolls" array
// to determine and return the highest die roll
function determineHighest(){

}

// Define a function "roundAnnouncement"
// That logs to the console:
// The current player's dice rolls
// The current player's highest die roll
// The current player's current score 
function roundAnnouncement(player){
    console.log(player.name + " rolled " + rolls)
    console.log("Their highest die was a " + roundHighest);
    console.log("Their current score is: " + player.score)
}

// Define the game's main function called "rollForRounds"
// That utilizes all the functions above
// Looping through a number of rounds of dice roling equal to the variable "rounds",
// Each round, looping through each player,
// Push the results of roundOfRolls onto the "rolls" variable
// Determine and add their highest result to their score property using "determineHighest"
// Then subtract one from diceToRoll variable each round, to represent rolling one fewer die

function rollForRounds(){
  for (let round = 1; round <= rounds; round ++) {
    console.log();
    console.log("In round " + round + ": " );
    for (let i = 0; i < players.length; i ++) {
    // Get coding here

  }
}

// Define a function "openAnnouncement"
// That logs to the console: 
// the name of the game, the number of players and rounds
function openAnnouncement(){

}

// Define a function called "finalScores"
// that loops through every player to:
// log to the console the final scores of each player

function finalScores(){

}

// In order to start every player off at zero,
// Run a for loop to give a score property to every player, with 0 as its value
for (let i = 0; i < players.length; i ++) {
  players[i].score = 0;
}

// Call the functions
openAnnouncement();
rollForRounds();
finalScores();

// Determine the Winner
// Output "is the winner" to the console