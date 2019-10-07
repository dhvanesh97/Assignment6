int1 = parseInt(window.prompt("Enter your number 1:"));
int2 = parseInt(window.prompt("Enter your number 2:"));
if (int1 > int2) {
    document.write("Larger number from both numbers is: " + int1);
}
else if (int2 > int1) {
    document.write("Larger number from both numbers is: " + int2);
}
else {
    document.write("both numbers are equal")
}

