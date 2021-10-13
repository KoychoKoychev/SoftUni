function subSum(arr,index1,index2){
    if (!Array.isArray(arr)){
        return NaN;
    }
    if (index1<0){
        index1=0;
    }
    if (index2>arr.length-1){
        index2=arr.length-1;
    }
    return arr.slice(index1,index2+1).map(Number).reduce((a,b)=>a+b,0);
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));
