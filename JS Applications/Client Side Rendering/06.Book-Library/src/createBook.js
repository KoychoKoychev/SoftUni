import { addBook } from "./requests.js";
import { updateTable } from "./app.js"

export async function createBook(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const title = formData.get("title");
    const author = formData.get("author");
    if (title && author) {
        const obj = {
            author,
            title
        }
        await addBook(obj);
        ev.target.reset();
        updateTable();
    }
}