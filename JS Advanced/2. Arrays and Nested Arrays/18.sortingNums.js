function sortingNums(arr){
    let arranged = arr.sort((a,b)=>a-b);
    let size = arr.length;
    let result =[];
    for (let i =0;i<size;i++){
        if (i%2==0){
            result.push(arranged.shift())
        }else{
            result.push(arranged.pop())
        }
    }
    return result;
}