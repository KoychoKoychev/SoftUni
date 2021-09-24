function extractArr(arr){
    let max = arr[0];
    let result = [];
    for (let el of arr){
        if (el >= max){
            max = el;
            result.push(el)
        }
    }
    return result;
}
