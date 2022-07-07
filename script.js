// declare variables
var playChoice = ["R", "P", "S"];
var wins = 0;
var ties = 0;
var losses = 0;
// function to play the game 
var playGame = function () {
// get user choice
    var userChoice = window.prompt("R, P, or S?");
    if (!userChoice) {
        return;
      }
    userChoice = userChoice.toUpperCase();
    console.log(userChoice);   
// get comp choice    
    var compChoice = playChoice[Math.floor(Math.random()*playChoice.length)];
    window.alert("The computer chose " + compChoice); console.log(compChoice);
// determine winner
    if (userChoice == "R" && compChoice == "R") {
        window.alert("It's a tie!"); console.log("It's a tie!"); ties++;
    } else if (userChoice == "R" && compChoice == "S") {
        window.alert("You win!"); console.log("You win!"); wins++;
    } else if (userChoice == "R" && compChoice == "P") {
        window.alert("You lost!"); console.log("You lose!"); losses++;
    } else if (userChoice == "P" && compChoice == "R") {
        window.alert("You win!"); console.log("You win!"); wins++;
    } else if (userChoice == "P" && compChoice == "S") {
        window.alert("You lost!"); console.log("You lose!"); losses++;
    } else if (userChoice == "P" && compChoice == "P") {
        window.alert("It's a tie!"); console.log("It's a tie!"); ties++;
    } else if (userChoice == "S" && compChoice == "R") {
        window.alert("You lost!"); console.log("You lose!"); losses++;
    } else if (userChoice == "S" && compChoice == "S") {
        window.alert("It's a tie!"); console.log("It's a tie!"); ties++;
    } else if (userChoice == "S" && compChoice == "P") {
        window.alert("You win!"); console.log("You win!"); wins++;
    } else (window.alert("Please pick R, P, or S."),console.log("Please pick R, P, or S."))
    
// track stats
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );
// aask to play agaain  
    var playAgain = window.confirm("Play Again?");
    if (playAgain) {
        playGame();
    } else window.alert("Fine then, be that way!")
}
// starting the game

window.onkeydown = function() {
    playGame()
}

        


