function mathOperations(num1,num2,operator){
    let calcObj = {
        "+" : num1+num2,
        "-" : num1-num2,
        "*" : num1*num2,
        "/" : num1/num2,
        "%" : num1%num2,
        "**" : num1**num2,
    }
    console.log(calcObj[operator]);
}