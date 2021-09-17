function cookingByNumbers(num,command1,command2,command3,command4,command5){
    let result = Number(num);
    let operations = {
        chop : function(x){
            return x/2;},
        dice : function(x){
            return Math.sqrt(x);},
        spice : function(x){
            return x+1;},
        bake : function(x){
            return x*3;},
        fillet : function(x){
            return x - .2*x;},
    }
    console.log(operations[command1](result));
    result = operations[command1](result);
    console.log(operations[command2](result));
    result = operations[command2](result);
    console.log(operations[command3](result));
    result = operations[command3](result);
    console.log(operations[command4](result));
    result = operations[command4](result);
    console.log(operations[command5](result));
}