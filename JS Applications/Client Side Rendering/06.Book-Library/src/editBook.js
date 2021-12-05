import { showHome } from "./app.js";
import { loadBook,editBook } from "./requests.js";

export async function populateForm(id){
    const form = document.querySelector("#edit-form");
    const data = await loadBook(id);
    const title = data.title
    const author = data.author
    form.querySelector("[name=title]").value = title;
    form.querySelector("[name=author]").value = author;
    form.setAttribute("_id",id);
}

export async function edit(ev){
    ev.preventDefault();
    console.log(ev.target);
    const form = new FormData(ev.target);
    const id = ev.target.getAttribute("_id");
    const title = form.get("title");
    const author = form.get("author");
    const obj = {
        author,
        title
    }
    await editBook(obj,id);
    ev.target.reset();
    showHome("addForm");
}