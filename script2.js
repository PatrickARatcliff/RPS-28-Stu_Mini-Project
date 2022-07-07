// variables

    //choices index 0,1,2
var playChoice = ["R", "P", "S"]
    //stats
var wins = 0;
var losses = 0;
var ties = 0;

//main play function
var playGame = function () { 
    //make my pick
    var userChoice = window.prompt("Select R, P, or S?");
    console.log(userChoice)
    
    if (!userChoice){
        return;
    }
    // account for wrong key pushed

    userChoice = userChoice.toUpperCase();
    //comp pick
    // math.floor --> rounding down to nearest interger (index)
    // math.random picking random # between 0 and 2.9999~
    // * 3 
    // window.alert ("I choose " + compChoice),console.log(compChoice);
    var compChoice = playChoice[Math.floor(Math.random()*playChoice.length)];
    window.alert("I choose " + compChoice); console.log(compChoice);
    //user cancels
    
    // account for lowercase ===
    
    //compare picks w, l, t
    //check for tie
    if (userChoice === compChoice) {
        window.alert ("It's a tie"),ties++, console.log("Tie");
   //check for win
    } else if ((userChoice == "R" && compChoice == "S") ||
            (userChoice == "P" && compChoice == "R") ||
            (userChoice == "S" && compChoice == "P")) { 
                window.alert ("You win!"); console.log("Win"); wins++;
    } else {
        window.alert("You lose!");losses++;console.log("Loss")
    }
    //track stats
    window.alert ("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: "+  ties ) , console.log("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: "+  ties )    
    //play agin?
    var playAgain = window.confirm ("Play again?") 
    if (playAgain) {
        playGame()
    } else window.alert("Fine, be that way!")
}
    //logic call funtions
    window.onkeydown = function() {
        playGame()
    }
