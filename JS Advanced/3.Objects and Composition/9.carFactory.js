function carFactory(obj) {
    const engine = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }
    const carriages = {
        hatchback: { type: 'hatchback', color:undefined},
        coupe: { type: 'coupe', color:undefined},
    };
    for (const el in engine){
        if (engine[el].power >= obj.power){
            obj.engine = engine[el];
            delete obj.power;
            break;
        }
    }
    for (const el in carriages){
        if (carriages[el].type == obj.carriage){
            obj.carriage = carriages[el];
            obj.carriage.color = obj.color;
            delete obj.color;
        }
    }
    let size = 0;
    if (obj.wheelsize%2==0){
        size = obj.wheelsize-1;
    }else {
        size = obj.wheelsize;
    }
    obj.wheels = [size,size,size,size];

    delete obj.wheelsize;

    return obj;
}
