import { getSearched, getUserData } from "./api/data.js";
import { html } from "./lib.js";

const searchTemplate = (albumsArr, userId, onSearch, params = "") => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value = ${params}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    ${params ? html`
    <div class="search-result">
        <!--If have matches-->
        ${albumsArr.length > 0 ? html`
        ${albumsArr.map(e => albumCard(e, userId))}
        `: html`<p class="no-result">No result.</p>`}
        <!--If there are no matches-->
    </div>
    `: null}

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


export async function searchPage(ctx) {
    const params = ctx.querystring.split("=")[1];
    let albumsArr = [];
    let userId
    if (getUserData()) {
        userId = getUserData().id
    }
    if (params) {
        albumsArr = await getSearched(encodeURIComponent(params))
    }

    ctx.render(searchTemplate(albumsArr, userId, onSearch, params));

    async function onSearch(ev) {
        ev.preventDefault();
        const query = ev.target.parentNode.querySelector("#search-input").value;

        if (query) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(query))
        } else {
            alert("Please fill the search field");
        }
    }
}