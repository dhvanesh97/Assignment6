var count;
for(count=1;count<=100; count++) {
    if(count % 3 === 0 && count % 5 === 0) {
        document.write("Marco! Polo! <br/>");
    }
    else if(count % 3 === 0){
        document.write("Marco! <br/>");
    }
    else if(count % 5 === 0) {
        document.write("Polo! <br/>");
    }
    else{
        document.write(count+ "<br/>");
    }
    
}