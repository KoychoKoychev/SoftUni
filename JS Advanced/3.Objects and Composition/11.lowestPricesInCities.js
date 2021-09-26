function lowestPrices (arr){
    let obj = {};
    for (let el of arr){
        let [town,product,price] = el.split(" | ");
        if (!obj.hasOwnProperty(product)){
            obj[product]= {};
            obj[product][town] = Number(price);
        }else{
            obj[product][town] = Number(price);
        }
    }
    for (const el in obj){
        let bestPrice = Object.entries(obj[el]).sort((a,b)=>a[1]-b[1])[0]
        console.log(`${el} -> ${bestPrice[1]} (${bestPrice[0]})`);
    }
}
