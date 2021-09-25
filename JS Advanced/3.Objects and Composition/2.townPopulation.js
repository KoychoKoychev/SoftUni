function townPopulation(arr){
    let town = {};
    arr.forEach((x) => {
        let [name,population] = x.split(" <-> ");
        if (town.hasOwnProperty(name)){
            town[name] += Number(population);
        }else{
            town[name] = Number(population);
        }
    })
    for (const el in town){
        console.log(`${el} : ${town[el]}`);
    }
}