import { loadSearched } from "./api/data.js";
import { html } from "./lib.js";

const searchTemplate = (cars, onSearch, params="" ) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year" .value = ${params}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

        <!-- Display all records -->
        ${cars.length > 0 ?
            cars.map(carCardTemplate) :
            html`<p class="no-cars"> No results.</p>`}
        <!-- Display if there are no matches -->
      
    </div>
</section>
`;

const carCardTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`

export async function searchPage(ctx) {
    const params = ctx.querystring.split("=")[1];
    let cars = [];
    if(params){
        cars = await loadSearched(encodeURIComponent(Number(params)))
    }
    ctx.render(searchTemplate(cars,onSearch,params));
    
    async function onSearch(ev) {
        ev.preventDefault();
        const query = ev.target.parentNode.querySelector("#search-input").value;
        
        if(query){
            ctx.page.redirect('/search?query=' + encodeURIComponent(query))
        }
    }
}