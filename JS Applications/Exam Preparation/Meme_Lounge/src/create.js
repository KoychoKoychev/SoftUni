import { createMeme } from "./api/data.js";
import { html } from "./lib.js";
import { notify } from "./notification.js";

const createTemplate = (onSubmit) => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`


export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);

        const title = formData.get("title");
        const description = formData.get("description");
        const imageUrl = formData.get("imageUrl");

        if (title == "" || description == "" || imageUrl == "") {
            notify("All fields must be filled!")
        } else {
            await createMeme({
                title,
                description,
                imageUrl
            }
            );
            ctx.page.redirect("/catalog");
        }
    }
}