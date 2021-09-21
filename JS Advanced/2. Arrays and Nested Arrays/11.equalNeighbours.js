function equalNeighbours(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == arr[i][j+1]){
                result.push(arr[i][j]);
            }
            if (i<arr.length-1){
                if (arr[i][j] == arr[i+1][j]){
                    result.push(arr[i][j]);
                }
            }
        }
    }
    return result.length;
}
