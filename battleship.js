// ALL VARIABLES
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 +1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// Loop for game logic
while(isSunk == false){
    // Obtain user's guess.
    guess = prompt("Ready! Aim! Fire! (enter a number from 0 - 6):");
    // Check guess for validity.
    if(guess < 0 || guess > 6){
        alert("Please enter a valid number!!");
    }else{
        guesses = guesses + 1;
        // Check for a hit
        if(guess == location1 || guess == location2 || guess == location3){
            alert("!HIT!");
            hits = hits + 1;
            // Check for sinking ship.
            if(hits == 3){
                isSunk = true;
                alert(" You sank my battleship!!");
            }
        }
        else{
            alert("!MISSED!");
        }
    }
}

var stats = " You took " + guesses + " guesses to sink the battleship,  which means your shooting accuracy was : " + (3/guesses);
alert(stats);