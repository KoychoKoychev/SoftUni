import { getAllAlbums, getUserData } from "./api/data.js";
import { html } from "./lib.js";

const catalogTemplate = (albumsArr, userId) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${albumsArr.length > 0 ? html`
    ${albumsArr.map(e => albumCard(e, userId))}
    `: html`<p>No Albums in Catalog!</p>`}
    <!--No albums in catalog-->

</section>
`;

const albumCard = (album, userId) => html`
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${userId != undefined ? html`
        <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>
        `: null}
    </div>
</div>
`;

export async function catalogPage(ctx) {
    let userId
    if (getUserData()) {
        userId = getUserData().id
    }
    const albumsArr = await getAllAlbums();

    ctx.render(catalogTemplate(albumsArr, userId));
}