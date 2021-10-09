function solution(num){
    function add(num2){
        return Number(num)+ Number(num2)
    }
    return add;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
