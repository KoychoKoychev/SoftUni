function biggestEl(arr){
    return (arr.flat(1).sort((a,b)=>a-b).pop());
}