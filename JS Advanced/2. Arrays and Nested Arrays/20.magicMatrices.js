function magicMatrices(arr){
    let sum = arr[0].reduce((a,b)=>a+b);
    let flag = true;
    for (let el of arr){
        if (el.reduce((a,b)=>a+b) !== sum){
            flag = false;
        }
    }
    for (let j = 0;j<arr.length;j++){
        let currSum=0;
        for (let i = 0;i<arr.length;i++){
            currSum += arr[i][j];
        }
        if (currSum !== sum){
            flag = false;
        }
    }
    console.log(flag);
}
