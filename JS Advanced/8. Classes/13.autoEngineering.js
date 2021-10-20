function autoEngineering(arr) {
    const result = {};

    for (let el of arr){
        let [brand,model,quantity] = el.split(" | ");
        quantity = Number(quantity);
        if (!result.hasOwnProperty(brand)){
            result[brand]={};
            result[brand][model] = quantity;
        }else if (!result[brand].hasOwnProperty(model)){
            result[brand][model] = quantity;
        }else{
            result[brand][model] += quantity;
        }
    }

    for (const key in result){
        console.log(key);
        for (const el in result[key]){
            console.log(`###${el} -> ${result[key][el]}`);
        }
    }
}

autoEngineering(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);