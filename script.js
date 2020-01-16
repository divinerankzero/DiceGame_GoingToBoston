// Code Challenge: Create the dice game "Going to Boston"
//http://www.netexl.com/howtoplay/going-to-boston/

const rounds = 3
let diceToRoll = rounds

let players = [
  {name: "Keith"},
  {name: "Freya"},
  {name: "Josh"},
  {name: "Shan"}
]

// This stuff will change every player, every round
let rolls = [];
let roundHighest = 0;

function rollDie() {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundOfRolls() {
  rolls = [];
  for (let i = 0; i < diceToRoll; i ++) {
    rolls.push(rollDie());
  }
  return rolls;
}

function determineHighest(){
  let highest = 0;
  for (let i = 0; i < rolls.length; i ++) {
    if (rolls[i] > highest) {
      highest = rolls[i];
    }
  }
  return highest
}

function roundAnnouncement(player){
    console.log(player.name + " rolled " + rolls)
    console.log("Their highest die was a " + roundHighest);
    console.log("Their current score is: " + player.score)
}

// Define the game's main function called "rollForRounds"
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
      rolls.push(roundOfRolls());
      roundHighest = determineHighest(rolls);
      players[i].score += roundHighest
      roundAnnouncement(players[i]);
    }
    diceToRoll --;
  }
}

function openAnnouncement(){
  console.log('"Going to Boston" Dice Game');
  console.log("We're playing a game with: ");
  console.log(players.length + " players and " + rounds + " rounds.");
}

function finalScores(){
  console.log();
  console.log("Final Scores:");
  for (let i = 0; i < players.length; i ++){ 
    console.log(players[i].name + ": " + players[i].score);
  }
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