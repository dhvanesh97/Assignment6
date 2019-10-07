var i, j, hash;
for (i = 1; i <= 7; i++) {
    for (j = 1; j <= i; j++) {
        if (j == 1) {
            hash = "#";
        }
        else {
            hash = hash + "#";
        }
    }
    window.console.log(hash);


}