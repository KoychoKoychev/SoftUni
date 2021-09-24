function addRemoveEl (arr){
    let result = [];
    for (let i=1;i<=arr.length;i++){
        if (arr[i-1]=="add"){
            result.push(i)
        }else{
            result.pop();
        }
    }
    if (result.length == 0){
        console.log("Empty");
    }else{
        console.log(result.join("\n"));
    }
}