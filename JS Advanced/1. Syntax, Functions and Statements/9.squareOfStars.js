function squareOfStars(num){
    if (typeof(num) === 'number'){
        for (let i=1; i<=num; i++){
            console.log("* ".repeat(num));
        }
    }else{
        for (let i=1; i<=5; i++){
            console.log("* ".repeat(5));
        }
    }
}