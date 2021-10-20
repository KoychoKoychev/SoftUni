class Hex{
    constructor(num){
        this.value = Number(num);
    }
    valueOf(){
        return this.value;
    }
    toString(){
        return `0x`+this.value.toString(16).toUpperCase();
    }
    plus(object){
        object.value+=this.value;
        return object;
    }
    minus(object){
        object.value=this.value-object.value;
        return object;
    }
    parse(input){
        return parseInt(input,16);
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
