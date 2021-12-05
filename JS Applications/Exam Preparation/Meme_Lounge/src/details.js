import { delMeme, getMemeByID, getUserData } from "./api/data.js";
import { html } from "./lib.js";

const detailsTemplate = (meme, isOwner, onDelete) => html`<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            ${isOwner ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : null}

        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const meme = await getMemeByID(ctx.params.id)
    const userData = getUserData();
    const isOwner = userData && userData.id == meme._ownerId

    ctx.render(detailsTemplate(meme, isOwner, onDelete));

    async function onDelete() {
        const accept = confirm("Are you sure you want to delete this Meme?")
        if (accept) {
            await delMeme(ctx.params.id);
            ctx.page.redirect("/catalog")
        }
    }
}