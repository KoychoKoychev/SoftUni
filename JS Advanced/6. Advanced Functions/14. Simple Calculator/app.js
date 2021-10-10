function calculator() {
    let numberField1;
    let numberField2;
    let resultField;
    function init(selector1, selector2, resultSelector) {
        numberField1 = document.querySelector(selector1);
        numberField2 = document.querySelector(selector2);
        resultField = document.querySelector(resultSelector);
    }
    function add() {
        resultField.value = Number(numberField1.value) + Number(numberField2.value)
    }
    function subtract() {
        resultField.value = Number(numberField1.value) - Number(numberField2.value)
    }
    return {
        init,
        add,
        subtract
    }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 





