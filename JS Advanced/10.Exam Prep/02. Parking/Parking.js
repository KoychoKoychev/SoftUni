class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.vehicles.length < this.capacity) {
            this.vehicles.push({
                carModel,
                carNumber,
                payed: false,
            })
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        } else {
            throw new Error("Not enough parking space.")
        }
    }
    removeCar(carNumber) {
        const numberList = this.vehicles.map(x => x.carNumber);
        if (numberList.includes(carNumber)) {
            const index = numberList.indexOf(carNumber);
            if (this.vehicles[index].payed) {
                this.vehicles.splice(index, 1);
                return `${carNumber} left the parking lot.`
            } else {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
            }
        } else {
            throw new Error("The car, you're looking for, is not found.")
        }
    }
    pay(carNumber) {
        const numberList = this.vehicles.map(x => x.carNumber);
        if (numberList.includes(carNumber)) {
            const index = numberList.indexOf(carNumber);
            if (this.vehicles[index].payed) {
                throw new Error(`${carNumber}'s driver has already payed his ticket.`)
            } else {
                this.vehicles[index].payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`
            }
        } else {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
    }
    getStatistics(carNumber) {
        let result = [];
        if (carNumber == undefined) {
            result = [`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`]
            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (let el of sorted) {
                if (el.payed) {
                    result.push(`${el.carModel} == ${el.carNumber} - Has payed`)
                } else {
                    result.push(`${el.carModel} == ${el.carNumber} - Not payed`)
                }
            }
        } else {
            const numberList = this.vehicles.map(x => x.carNumber);
            const index = numberList.indexOf(carNumber);
            if (this.vehicles[index].payed){
                result.push(`${this.vehicles[index].carModel} == ${this.vehicles[index].carNumber} - Has payed`);
            }else{
                result.push(`${this.vehicles[index].carModel} == ${this.vehicles[index].carNumber} - Not payed`);
            }
        }
        return result.join("\n");
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));


console.log(parking.getStatistics());

