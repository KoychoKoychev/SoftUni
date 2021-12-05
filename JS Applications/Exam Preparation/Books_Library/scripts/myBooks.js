import { getMyBooks, getUserData } from "./api/data.js";
import { html } from "./lib.js";

const homeTemplate = (booksArr) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    ${booksArr.length > 0 ? html`
    <ul class="my-books-list">
        ${booksArr.map(bookCard)}
    </ul>
    `: html`<p class="no-books">No books in database!</p>`}

</section>
`

const bookCard = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`

export async function myBooksPage(ctx) {
    let userId;
    if (getUserData()) {
        userId = getUserData().id
    }
    const booksArr = await getMyBooks(userId);

    ctx.render(homeTemplate(booksArr));
}