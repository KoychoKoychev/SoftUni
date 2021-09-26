function townsToJson(arr){
    let result = [];
    let [heading1,heading2,heading3] = arr.shift().slice(1).split("|").map(x => x.trim())
    for (let el of arr){
        let [_,town,latitude,longitude] = el.split("|").map(x => x.trim());
        let obj = {};
        obj[heading1] = town;
        obj[heading2] = parseFloat(Number(latitude).toFixed(2));
        obj[heading3] = parseFloat(Number(longitude).toFixed(2));
        result.push(obj);
    }
    return JSON.stringify(result);
}
