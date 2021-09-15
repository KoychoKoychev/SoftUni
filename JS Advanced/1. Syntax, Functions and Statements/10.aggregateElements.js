function aggregateElements(arr){
    console.log(arr.reduce((a, b) => a + b,0));
    console.log(arr.map(x => 1/x).reduce((a, b) => a + b,0));
    console.log(arr.join(""));
}