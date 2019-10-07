var coinFlip;
var count;
for (count = 0; count < 10; count++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("Heads \n");
    }
    else {
        window.console.log("Tails \n");
    }
}