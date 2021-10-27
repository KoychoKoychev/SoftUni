(function arrayExtension(){
    Array.prototype.last = function(){
        return this[this.length-1];
    }
    Array.prototype.skip = function(n){
        if (n<0 || n>this.length || typeof(n) != 'number'){
            throw new Error("index not valid")
        }else{
            return this.slice(n);
        }
    }
    Array.prototype.take = function(n){
        if (n<0 || n>this.length || typeof(n) != 'number'){
            throw new Error("index not valid")
        }else{
            return this.slice(0,n);
        }
    }
    Array.prototype.sum = function(){
        return this.reduce((a,b)=>a+b,0);
    }
    Array.prototype.average = function(){
        return this.reduce((a,b)=>a+b,0)/this.length;
    }
})()

let myArr = [1,2,3];

console.log(myArr.average());