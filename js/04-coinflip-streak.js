var coinFlip;
do{
    coinFlip = Math.round(Math.random());
    if(coinFlip === 0){
        window.console.log("Heads \n");
    }
    else{
        window.console.log("Tails \n");
    }

}while(coinFlip !== 1);