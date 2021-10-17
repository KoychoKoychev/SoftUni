class Stringer {
    constructor(str, num) {
        this.innerString = str;
        this.innerLength = num;
    }
    increase(length) {
        if ((this.innerLength + length)>=0){
            this.innerLength += length;
        }else{
            this.innerLength = 0;
        }
    }
    decrease(length) {
        if ((this.innerLength - length)>=0){
            this.innerLength -= length;
        }else{
            this.innerLength = 0;
        }
    }
    toString(){
        if (this.innerString.length <=this.innerLength){
            return this.innerString;
        }else if (this.innerLength==0){
            return "..."
        }else{
            return this.innerString.substring(0,this.innerLength) + "...";
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
