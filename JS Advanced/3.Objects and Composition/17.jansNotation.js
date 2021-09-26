function jansNotation(arr) {
    let numbers = [];
    let flag = true;
    const operations = {
        "+": function () {
            if (numbers.length >= 2) {
                numbers[numbers.length - 2] += numbers[numbers.length - 1];
                numbers.pop();
            } else {
                return false;
            }
        },
        "-": function () {
            if (numbers.length >= 2) {
                numbers[numbers.length - 2] -= numbers[numbers.length - 1];
                numbers.pop();
            } else {
                return false;
            }
        },
        "*": function () {
            if (numbers.length >= 2) {
                numbers[numbers.length - 2] *= numbers[numbers.length - 1];
                numbers.pop();
            } else {
                return false;
            }
        },
        "/": function () {
            if (numbers.length >= 2) {
                numbers[numbers.length - 2] /= numbers[numbers.length - 1];
                numbers.pop();
            } else {
                return false;
            }
        },
    }
    for (let el of arr){
        if(typeof(el)=="number"){
            numbers.push(el);
        }else{
            if (operations[el]()==false){
                console.log("Error: not enough operands!");
                flag = false;
                break;
            }
        }
    }
    if (numbers.length>=2){
        console.log("Error: too many operands!");
    }else if (flag){
        console.log(Number(numbers[0]));
    }
}

    jansNotation([3,        4,        '+']    );
    jansNotation([5,
        3,
        4,
        '*',
        '-']
    );
    jansNotation([7,
        33,
        8,
        '-']
    );
    jansNotation([15,
        '/']
    );
