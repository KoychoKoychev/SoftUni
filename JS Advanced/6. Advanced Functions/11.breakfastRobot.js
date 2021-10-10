function solution(){
    const recipes = {
        apple:{carbohydrate:1,flavour:2},
        lemonade:{carbohydrate:10,flavour:20},
        burger:{carbohydrate:5,fat:7,flavour:3},
        eggs:{protein:5,fat:1,flavour:1},
        turkey:{protein:10,carbohydrate:10,fat:10,flavour:10}
    }
    const storage = {
        carbohydrate:0,
        flavour:0,
        fat:0,
        protein:0,
    }

    function restock(el,quantity){
        storage[el]+=Number(quantity);
        return "Success";
    }
    function prepare(recipe,quantity){
        for (const product in recipes[recipe]){
            if (recipes[recipe][product]*Number(quantity) > storage[product]){
                return `Error: not enough ${product} in stock`
            }
        }
        for (const product in recipes[recipe]){
            storage[product] -= Number(quantity)*recipes[recipe][product];
        }
        return 'Success';
    }
    function report(){
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }

    function result (str){
        const [command,element,quantity] = str.split(" ");
        if (command == "restock"){
            return restock(element,Number(quantity));
        }else if (command == "prepare"){
            return prepare(element,Number(quantity));
        }else if (command == "report"){
            return report();
        }
    }
    return result;
}

let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

// console.log(manager("restock flavour 50"))
// console.log(manager("prepare lemonade 4")) 
// console.log(manager("restock carbohydrate 10"))
// console.log(manager("restock flavour 10"))
// console.log(manager("prepare apple 1"))
// console.log(manager("restock fat 10"))
// console.log(manager("prepare burger 1"))
// console.log(manager("report"))


console.log(manager("prepare turkey 1"))
console.log(manager("restock protein 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("report"))
