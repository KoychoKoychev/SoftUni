import { html, render } from "../node_modules/lit-html/lit-html.js";
import { loadList } from "./requests.js";
import { homeView, bookTemplate, addForm, editForm } from "./templates.js"
import { createBook } from "./createBook.js"
import { edit } from "./editBook.js";


const body = document.querySelector("body");
showHome("addForm");
document.querySelector("#loadBooks").addEventListener("click", updateTable);
export async function showHome(form) {
    if (form == "addForm") {
        render([homeView, addForm], body);
        document.querySelector("#add-form").addEventListener("submit", createBook);
        updateTable();
    } else if (form == "editForm") {
        render([homeView, editForm], body);
        document.querySelector("#edit-form").addEventListener("submit", edit);
        updateTable();
    }
}

export async function updateTable() {
    render(html`Loading...`, document.querySelector("tbody"));
    const responseData = await loadList();
    const data = Object.entries(responseData)
    render(data.map(el => bookTemplate(el[0], el[1])), document.querySelector("tbody"));
}
