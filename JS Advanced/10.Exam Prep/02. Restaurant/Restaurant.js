class Restaurant{
    constructor(budget){
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }


    loadProducts(productArr){
        let result = [];
        for (let el of productArr){
            let [name,quantity,price] = el.split(" ");
            quantity = Number(quantity);
            price = Number(price);

            if (price > this.budgetMoney){
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
                result.push(`There was not enough money to load ${quantity} ${name}`)
            }else{
                if (this.stockProducts.hasOwnProperty(name)){
                    this.stockProducts[name] += quantity;
                    this.budgetMoney -= price;
                    this.history.push(`Successfully loaded ${quantity} ${name}`)
                    result.push(`Successfully loaded ${quantity} ${name}`)
                }else{
                    this.stockProducts[name] = quantity;
                    this.budgetMoney -= price;
                    this.history.push(`Successfully loaded ${quantity} ${name}`)
                    result.push(`Successfully loaded ${quantity} ${name}`)
                }
            }
        }
        return result.join("\n")
    }

    addToMenu(meal,neededProducts,price){
        if (this.menu.hasOwnProperty(meal)){
            return `The ${meal} is already in the our menu, try something different.`
        }else{
            this.menu[meal]={
                products:{},
                price
            }
            for(let el of neededProducts){
                let [name,quantity] = el.split(" ");
                quantity = Number(quantity);
                this.menu[meal].products[name] = quantity;
            }
            if (Object.keys(this.menu).length == 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }else{
                let num = Object.keys(this.menu).length;
                return `Great idea! Now with the ${meal} we have ${num} meals in the menu, other ideas?`
            }
        }
    }

    showTheMenu(){
        let result = [];
        for (let meal in this.menu){
            result.push(`${meal} - $ ${this.menu[meal].price}`)
        }
        if(result.length == 0){
            return `Our menu is not ready yet, please come later...`
        }else{
            return result.join("\n")
        }
    }

    makeTheOrder(meal){
        if (!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }else{
            for (let prod in this.menu[meal].products){
                if(!this.stockProducts.hasOwnProperty(prod) || this.stockProducts[prod]<this.menu[meal].products[prod]){
                    
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            }
            for (let prod in this.menu[meal].products){
                this.stockProducts[prod] -= this.menu[meal].products[prod];
            }
            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }
    }
}

let kitchen = new Restaurant(40);

console.log(kitchen.loadProducts(["Banana 10 5","Banana 10 5","Strawberries 50 5"]));

console.log(kitchen.budgetMoney);
console.log(Object.entries(kitchen.stockProducts).join(", "));
console.log(kitchen.showTheMenu());

console.log(kitchen.addToMenu('frozenYogurt', ['Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt2', ['Banana 2', 'Strawberries 5'], 19.99));
console.log(kitchen.addToMenu('frozenYogurt3', ['Banana 15', 'Strawberries 15'], 29.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Banana 1', 'Strawberries 10'], 9.99));

console.log(kitchen.budgetMoney);

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder("frozenYogurt"));
console.log(kitchen.makeTheOrder("frozenYogurt"));
console.log(kitchen.makeTheOrder("frozenYogurt"));

console.log(Object.entries(kitchen.stockProducts).join(", "));

console.log(kitchen.budgetMoney);

console.log(kitchen.makeTheOrder("frozenYogurt2"));

console.log(Object.entries(kitchen.stockProducts).join(", "));

console.log(kitchen.budgetMoney);

console.log(kitchen.makeTheOrder("frozenYogurt3"));

console.log(Object.entries(kitchen.stockProducts).join(", "));

console.log(kitchen.budgetMoney);