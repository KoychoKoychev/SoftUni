function diagonalSums(arr) {
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
    console.log(sum1 + " " + sum2);
}