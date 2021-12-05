import { html } from "../node_modules/lit-html/lit-html.js";
import { deleteBook } from "./requests.js";
import { updateTable, showHome } from "./app.js"
import { populateForm } from "./editBook.js";


export const homeView = html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    
        </tbody>
`
export const bookTemplate = (id, book) => html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click=${() => {
                showHome("editForm")
                populateForm(id)
            }}>Edit</button>
            <button @click=${() => {
                deleteBook(id)
                updateTable()
            }}>Delete</button>
        </td>
    </tr>
    `

export const addForm = html`<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
`

export const editForm = html`
<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`