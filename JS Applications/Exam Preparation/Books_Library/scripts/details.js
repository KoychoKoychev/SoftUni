import { checkIfLiked, delBook, getBookById, getTotalLikes, getUserData, likeBook } from "./api/data.js";
import { html } from "./lib.js";

const detailsTemplate = (book, userId, onDelete, likes, isLiked, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${book._ownerId == userId 
                ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
                : null}
            <!-- Bonus -->
            ${(userId && isLiked != 1 && userId != book._ownerId) ? html`<a @click = ${onLike} class="button" href="#">Like</a>` : null}
            

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>

        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`


export async function detailsPage(ctx) {
    let userId;

    if (getUserData()) {
        const userData = getUserData();
        userId = userData.id;
    }
    const [book,likes,isLiked] = await Promise.all([
        getBookById(ctx.params.id),
        getTotalLikes(ctx.params.id),
        checkIfLiked(ctx.params.id,userId)
    ])

    ctx.render(detailsTemplate(book, userId, onDelete, likes, isLiked, onLike));

    function onDelete() {
        delBook(ctx.params.id);
        ctx.page.redirect("/");
    }

    async function onLike() {
        await likeBook(ctx.params.id);
        ctx.page.redirect("/details/" + ctx.params.id)
    }
}