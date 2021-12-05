import {html, render} from './node_modules/lit-html/lit-html.js';

const resultField = document.querySelector("#root");
const input = document.querySelector("#towns");
document.querySelector('#btnLoadTowns').addEventListener("click",displayTowns);

function displayTowns(ev){
    ev.preventDefault();
    const inputArr = input.value.split(',').map(a=>a.trim());
    const template = (inputArr) => html`
    <ul>
    ${inputArr.map(el=>html`<li>${el}</li>`)}
    </ul>
    `;
    const result = template(inputArr)
    render(result,resultField);
    input.value = "";
}