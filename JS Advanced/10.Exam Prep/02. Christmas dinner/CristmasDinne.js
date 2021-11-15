class ChristmasDinner {
    constructor(budget) {
        if (Number(budget) < 0) {
            throw new Error("The budget cannot be a negative number");
        } else {
            this.budget = Number(budget);
        }
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(arr) {
        let [name, price] = arr;
        price = Number(price);
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product")
        } else {
            this.budget -= price;
            this.products.push(name);
            return `You have successfully bought ${name}!`
        }
    }
    recipes(obj) {
        for (let el of obj.productsList) {
            if (!this.products.includes(el)) {
                throw new Error("We do not have this product")
            }
        }
        this.dishes.push({
            recipeName: obj.recipeName,
            productsList: obj.productsList
        })
        return `${obj.recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        let dishesArr = this.dishes.map(x => x.recipeName);
        if (!dishesArr.includes(dish)) {
            throw new Error("We do not have this dish")
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        } else {
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`
        }
    }
    showAttendance() {
        let result = [];
        let dishesArr = this.dishes.map(x => x.recipeName);
        for (let name in this.guests) {
            let dish = this.guests[name];
            let index = dishesArr.indexOf(dish);
            let productsArr = this.dishes[index].productsList;
            result.push(`${name} will eat ${dish}, which consists of ${productsArr.join(", ")}`)
        }
        return result.join("\n").trim();
    }
}


let dinner = new ChristmasDinner(300);
console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
dinner.inviteGuests('Gesha', 'Oshav');
dinner.inviteGuests('Peter', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
