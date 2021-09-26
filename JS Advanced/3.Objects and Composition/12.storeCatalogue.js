function storeCatalogue(arr) {
    let catalogue = {}
    for (const el of arr) {
        let [name, price] = el.split(" : ");
        catalogue[name] = Number(price);
    }
    let sorted = Object.entries(catalogue).sort((a,b)=>a[0].localeCompare(b[0]));
    for (let i = 0; i < sorted.length; i++) {
        if (i == 0 || sorted[i][0].charAt(0).toLocaleLowerCase() != sorted[i - 1][0].charAt(0).toLocaleLowerCase()) {
            console.log(sorted[i][0][0].toUpperCase());
            console.log(`  ${sorted[i][0]}: ${sorted[i][1]}`);
        }else {
            console.log(`  ${sorted[i][0]}: ${sorted[i][1]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
/*
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);

*/
