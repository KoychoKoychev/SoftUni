function computer() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor === Computer) {
                throw new Error("This is an abstract class!")
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if (!(battery instanceof Battery)) {
                throw new TypeError("Wrong type of battery")
            } else {
                this._battery = battery;
            }
        }
        set battery(obj) {
            if (!(obj instanceof Battery)) {
                throw new TypeError("Wrong type of battery");
            } else {
                this._battery = obj;
            }
        }
        get battery() {
            return this._battery;
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            if (keyboard instanceof Keyboard) {
                this._keyboard = keyboard;
            } else {
                throw new TypeError("Wrong type of Keyboard");
            }
            if (!(monitor instanceof Monitor)) {
                throw new TypeError("Wrong type of Monitor");
            } else {
                this._monitor = monitor;
            }
        }
        set keyboard(obj) {
            if (!(obj instanceof Keyboard)) {
                throw new TypeError("Wrong type of Keyboard");
            } else {
                this._keyboard = obj;
            }
        }
        get keyboard() {
            return this._keyboard;
        }
        set monitor(obj) {
            if (!(obj instanceof Monitor)) {
                throw new TypeError("Wrong type of Monitor");
            } else {
                this._monitor = obj;
            }
        }
        get monitor() {
            return this._monitor;
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop,
    }
}

let classes = computer();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

// let battery1 = new Battery('Energy', 3);
// let battery3 = new Battery('Energy', 3);
// let battery2 = { manufacturer: "Energy", expectedLife: 3 }
// let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery3);
// console.log(laptop);
// console.log(laptop.battery);
// // console.log(laptop);

let keyboard = new Keyboard('Energy', 3);
let monitor = new Monitor('MaxPower', 3,4);

let keyboard2 = {};
let monitor2 = {};


let pc = new Desktop("Hewlett Packard", 2.4, 4, 0.5,keyboard2,monitor);
console.log(pc);