function diagonalAttack(data){
    let arr=[];
    for (let el of data){
        arr.push(el.split(" ").map(Number));
    }
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                sum1 += arr[i][j];
            }
            if ((i+j)==arr.length-1){
                sum2 += arr[i][j];
            }
        }
    }
    if (sum1 == sum2){
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if ((i !== j) && ((i+j) !==arr.length-1)) {
                    arr[i][j]=sum1;
                }
            }
        }
    }
    for (let el of arr){
        console.log(el.join(" "));
    }
}
