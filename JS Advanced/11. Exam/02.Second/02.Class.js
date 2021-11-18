class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        }
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        } else if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }
        let namesList = this.listOfParticipants.map(x => x.name);
        if (namesList.includes(name)) {
            return `The ${name} is already registered at the camp.`
        } else {
            this.listOfParticipants.push({
                name,
                condition,
                power: 100,
                wins: 0
            })
            return `The ${name} was successfully registered.`
        }

    }
    unregisterParticipant(name) {
        let namesList = this.listOfParticipants.map(x => x.name);
        if (!namesList.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            let index = namesList.indexOf(name);
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let namesList = this.listOfParticipants.map(x => x.name);
        if (!namesList.includes(participant1) || (participant2 != undefined && !namesList.includes(participant2))) {
            throw new Error(`Invalid entered name/s.`)
        }
        if (participant1 != undefined && participant2 != undefined) {
            let index1 = namesList.indexOf(participant1);
            let index2 = namesList.indexOf(participant2);
            if (this.listOfParticipants[index1].condition != this.listOfParticipants[index2].condition) {
                throw new Error(`Choose players with equal condition.`)
            }
        }
        if (typeOfGame == "Battleship") {
            let index1 = namesList.indexOf(participant1);
            this.listOfParticipants[index1].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        } else if (typeOfGame == "WaterBalloonFights") {
            let index1 = namesList.indexOf(participant1);
            let index2 = namesList.indexOf(participant2);
            if (this.listOfParticipants[index1].power > this.listOfParticipants[index2].power) {
                this.listOfParticipants[index1].wins++;
                return `The ${this.listOfParticipants[index1].name} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipants[index1].power < this.listOfParticipants[index2].power) {
                this.listOfParticipants[index2].wins++;
                return `The ${this.listOfParticipants[index2].name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }
        }
    }
    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a,b)=>b.wins - a.wins);
        for (let el of sorted){
            result.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`)
        }

        return result.join("\n").trim();
    }
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


