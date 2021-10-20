function juice(arr) {
    const storage = {};
    const produced = {};
    for (let el of arr){
        let [name,quantity] = el.split(" => ");
        quantity= Number(quantity);
        if (!storage.hasOwnProperty(name)){
            storage[name] = quantity;
        }else{
            storage[name]+=quantity;
        }
        if(storage[name]>=1000){
            let bottle = Number(Math.floor(storage[name]/1000));
            storage[name] = storage[name]%1000;
            if(!produced.hasOwnProperty(name)){
                produced[name] = bottle;
            }else{
                produced[name] += bottle;
            }
        }
    }
    for (const key in produced){
        console.log(`${key} => ${produced[key]}`);
    }
}

juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);

juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);
