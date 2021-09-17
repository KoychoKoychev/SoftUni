function sameNumbers(num){
    let arr = num.toString().split("")
    if (arr.filter(x => x !== arr[0]).length === 0){
        console.log('true');
    }else{
        console.log("false");
    }
    console.log(arr.map(Number).reduce((a,b) => a+b,0));
}
