function circleArea(data){
    if (typeof(data) === 'number'){
        console.log((Math.PI*Math.pow(data,2)).toFixed(2));
    }else{
        console.log("We can not calculate the circle area, because we receive a " + typeof(data) + ".");
    }
}