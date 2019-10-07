var coinFlip = Math.round(Math.random());
var choice = window.prompt("choose heads or tails");
choice = choice.toLowerCase();
var certainNumber = 0.5;
if (coinFlip < certainNumber) {

    if (choice === "heads") {
        window.alert("The flip was heads and you chose heads...you win!");
    }
    else if (choice === "tails") {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
    else {
        window.alert("please enter a valid input!");
    }
}
else if (coinFlip >= certainNumber) {

    if (choice === "tails") {
        window.alert("The flip was tails and you chose tails...you win!");
    }
    else if (choice === "heads") {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
    else {
        window.alert("please enter a valid input!");
    }
}

