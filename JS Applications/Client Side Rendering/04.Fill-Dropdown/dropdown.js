import { html, render } from "./node_modules/lit-html/lit-html.js";
import {loadList,sendOption} from "./requests.js"

const template = (list) => html`
    ${list.map(l=>html`<option value=${l._id}>${l.text}</option>`)}
`
const dropDown = document.querySelector("#menu");
update();

async function update(){
    const data = await loadList();
    render(template(data),dropDown);
}
document.querySelector('form').addEventListener("submit",async (ev)=>{
    ev.preventDefault();
    const input = document.querySelector('#itemText');
    if (input.value != ""){
        await sendOption(input.value);
        update();
        input.value = "";
    }
})