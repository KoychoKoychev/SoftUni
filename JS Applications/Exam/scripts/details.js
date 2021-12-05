import { delAlbum, getAlbumById, getUserData } from "./api/data.js";
import { html } from "./lib.js";

const detailsTemplate = (album, userId, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>
            ${album._ownerId == userId 
                ? html`
            <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>`
                : null}
            <!-- Only for registered user and creator of the album-->      
        </div>
    </div>
</section>
`


export async function detailsPage(ctx) {
    let userId;

    if (getUserData()) {
        const userData = getUserData();
        userId = userData.id;
    }
    const album = await getAlbumById(ctx.params.id)

    ctx.render(detailsTemplate(album, userId, onDelete));

    function onDelete() {
        const accept = confirm("Are you sure you want to delete this album?");
        if(accept){
            delAlbum(ctx.params.id);
            ctx.page.redirect("/catalog");
        }
    }
}