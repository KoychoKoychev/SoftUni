function lastNumSequ(n,k){
    let result = [1];
    for (let i = 0; i<n-1; i++){
        let el = 0;
        for (let j=0; j<k;j++){
            if (result[i-j]==undefined){
                continue;
            }else{
                el += result[i-j];
            }
        }
        result.push(el);
    }
    return result;
}
