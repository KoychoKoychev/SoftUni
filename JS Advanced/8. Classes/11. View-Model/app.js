class Textbox {
    constructor(selector, reg) {
        this._elements = document.querySelectorAll(selector);
        for (let i = 0;i<this._elements.length;i++){
            this._elements[i].addEventListener("change",()=>{
                this._value = this._elements[i].value;
                for (let j = 0;j<this._elements.length;j++){
                    this.elements[j].value = this._value;
                }
            })
        }
        this._invalidSymbols = reg;
        this._value = "";
    }
    get elements() {
        return this._elements;
    }
    get value() {
        return this._value;
    }
    set value(input) {
        this._value = input;
        const arr = Array.from(this._elements)
        for (let el of arr) {
            el.value = input;
        }
    }
    isValid(){
        if(this._invalidSymbols.test(this._value)){
            return false;
        }else{
            return true;
        }
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

inputs[0].addEventListener('click', function () { console.log(textbox.value); });
