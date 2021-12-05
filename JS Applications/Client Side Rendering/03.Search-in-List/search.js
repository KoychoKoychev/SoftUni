import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js"

const list = document.querySelector("#towns")
const data = towns.map(t => {
   return { name: t, active: false }
});
const template = (towns) => html`
<ul>
   ${towns.map(t => html`<li class=${t.active ? "active"  : ""}>${t.name}</li>`)}
</ul>
`;
update();
function update() {
   render(template(data), list);
};
document.querySelector("button").addEventListener("click",()=>{
   const input = document.querySelector("#searchText").value;
   if(input != ""){
      data.forEach(el=>{
         el.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ? el.active = true : el.active = false
   });
   }else{
      data.map(el=>el.active = false);   
   }
   update();
});