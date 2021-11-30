document.getElementById("loadBooks").addEventListener("click", showBooks);
document.querySelector("form").addEventListener("submit", submit);
document.querySelector("table").addEventListener("click", del)
document.querySelector("table").addEventListener("click", edit)

async function loadBooks() {
    const url = "http://localhost:3030/jsonstore/collections/books";
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function submitBook(obj) {
    const url = "http://localhost:3030/jsonstore/collections/books";
    const res = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
    });
    const data = await res.json();

    return data;
}

async function deleteBook(id) {
    const url = "http://localhost:3030/jsonstore/collections/books/" + id;
    const res = await fetch(url, {
        method: "delete",
    });
    const data = await res.json();

    return data;
}

async function editBook(obj, id) {
    const url = "http://localhost:3030/jsonstore/collections/books/" + id;
    const res = await fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
    });
    const data = await res.json();

    return data;
}

async function showBooks() {
    const table = document.querySelector("table tbody");
    table.replaceChildren();

    const data = await loadBooks();

    for (let [id, el] of Object.entries(data)) {
        const title = e("td");
        title.textContent = el.title;
        const author = e("td");
        author.textContent = el.author
        const del = e("button");
        del.textContent = "Delete";
        del.dataset.id = id;
        const edit = e("button");
        edit.dataset.id = id;
        edit.textContent = "Edit";
        const buttons = e("td", {}, edit, del);
        const tr = e("tr", {}, title, author, buttons);
        table.appendChild(tr);
    }
    /*
    <tr>
        <td>Harry Poter</td>
        <td>J. K. Rowling</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>
    */

}

async function submit(ev) {
    ev.preventDefault();
    if (ev.target.querySelector("button").textContent == "Submit") {
        const formData = new FormData(ev.target);
        const title = formData.get("title");
        const author = formData.get("author");
        if (title != "" && author != "") {
            const obj = {
                title,
                author
            }
            await submitBook(obj);
            await showBooks();
            ev.target.reset();
        }
        else {
            alert("Fill all input fields!")
        }
    }else if (ev.target.querySelector("button").textContent == "Save"){
        const formData = new FormData(ev.target);
        const title = formData.get("title");
        const author = formData.get("author");
        const id = ev.target.querySelector("button").dataset.id;
        if (title != "" && author != "") {
            const obj = {
                title,
                author
            }
            await editBook(obj,id);
            ev.target.querySelector("h3").textContent = 'FORM';
            ev.target.querySelector("button").textContent = 'Submit';
            ev.target.reset();
            await showBooks();
        }
        else {
            alert("Fill all input fields!")
        }
    }
}

async function del(ev) {
    if (ev.target.tagName = "BUTTON" && ev.target.textContent == "Delete") {
        await deleteBook(ev.target.dataset.id);
        await showBooks();
    }
}

async function edit(ev) {
    if (ev.target.tagName = "BUTTON" && ev.target.textContent == "Edit") {
        const form = document.querySelector("form");
        form.querySelector("h3").textContent = "Edit FORM";
        document.querySelector("form button").textContent = "Save";
        document.querySelector("form button").dataset.id = ev.target.dataset.id;
        const currentTitle = ev.target.parentNode.previousElementSibling.previousElementSibling.textContent;
        const currentAuthor = ev.target.parentNode.previousElementSibling.textContent;
        form.querySelector("[name = title]").value = currentTitle;
        form.querySelector("[name = author]").value = currentAuthor;
    }
}

function e(tag, atrributesObj, ...children) {
    const element = document.createElement(tag);
    if (atrributesObj) {
        for (const [attribute, value] of Object.entries(atrributesObj)) {
            element.setAttribute(attribute, value)
        }
    }
    for (let el of children) {
        element.appendChild(el);
    }
    return element;
}