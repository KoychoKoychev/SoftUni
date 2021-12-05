import { html, render } from "./node_modules/lit-html/lit-html.js";
import { loadList } from "./requests.js";

const template = (student) => html`
   <tr class=${student.active ? "select"  : ""}>
      <td>${student.firstName} ${student.lastName}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
   </tr>
`;
const data = await loadList();
data.forEach(el => el.active = false);
update();
async function update() {
   render(data.map(template), document.querySelector("tbody"));
}

document.querySelector("#searchBtn").addEventListener("click",()=>{
   const inputField = document.querySelector("#searchField");
   if (inputField.value != ""){
      data.forEach(el => {
         if(JSON.stringify(el).toLocaleLowerCase().includes(inputField.value.toLocaleLowerCase())){
            el.active = true;
         }else{
            el.active = false;
         }
      })
      update();
   }else{
      data.forEach(el => el.active = false);
      update();
   }
})