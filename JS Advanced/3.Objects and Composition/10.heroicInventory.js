function heroicInventory(data){
    let result = [];
    for (let el of data){
        let [name,level,items]=el.split(" / ");
        let hero = {};
        hero.name = name;
        hero.level = Number(level);
        if (items){
            hero.items = items.split(", ");
        }else{
            hero.items = [];
        }
        result.push(hero);
    }
    return JSON.stringify(result)
}
