function negPosNums(arr){
    let result = [];
    for (let el of arr){
        el < 0 ? result.unshift(el) : result.push(el);
    }
    console.log(result.join("\n"));
}