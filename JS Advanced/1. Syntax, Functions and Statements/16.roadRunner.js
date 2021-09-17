function roadRunner(speed,location){
    let limits = {
        motorway : 130,
        interstate : 90,
        city : 50,
        residential : 20,
    }
    let maxSpeed = limits[location];
    if (speed <= maxSpeed){
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    }else if (speed-maxSpeed <= 20){
        console.log(`The speed is ${speed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`);
    }else if (speed-maxSpeed <= 40){
        console.log(`The speed is ${speed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`);
    }else{
        console.log(`The speed is ${speed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`);
    }
}