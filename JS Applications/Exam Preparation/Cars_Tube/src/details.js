import { getUserData, loadCarById, deleteCar } from "./api/data.js";
import { html } from "./lib.js";

const detailsTemplate = (car, userId, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>
            
        ${userId == car._ownerId 
        ? html`
        <div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>`
        : null}
    </div>
</section>
`


export async function detailsPage(ctx) {
    const car = await loadCarById(ctx.params.id);
    let userId;
    if (getUserData()) {
        userId = getUserData().id;
    }

    ctx.render(detailsTemplate(car, userId, onDelete));

    async function onDelete(ev) {
        ev.preventDefault();
        const accept = confirm("Are you sure you want to delete this listing?")
        if (accept) {
            await deleteCar(ctx.params.id);
            ctx.page.redirect("/catalog")
        }
    }

}