function solve(firstName, lastName) {
    let result = {
        firstName,
        lastName,
    }
    Object.defineProperty(result, 'fullName', {
        get() {
            return this.firstName + " " + this.lastName;
        },
        set(value) {
            let [first, last] = value.split(" ");
            if (!first || !last) {
            } else {
                this.firstName = first;
                this.lastName = last;
            }
        }
    })
    return result;
}

let person = solve("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla


let person1 = solve("Albert", "Simpson");
console.log(person1.fullName); //Albert Simpson
person1.firstName = "Simon";
console.log(person1.fullName); //Simon Simpson
person1.fullName = "Peter";
console.log(person1.firstName);  // Simon
console.log(person1.lastName);  // Simpson
