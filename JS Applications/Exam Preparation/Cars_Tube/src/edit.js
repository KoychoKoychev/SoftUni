import { editCar, loadCarById } from "./api/data.js";
import { html } from "./lib.js";

const editTemplate = (onEdit, car) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onEdit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`;


export async function editPage(ctx) {
    const car = await loadCarById(ctx.params.id);
    ctx.render(editTemplate(onEdit, car));

    async function onEdit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);

        const brand = formData.get("brand");
        const model = formData.get("model");
        const description = formData.get("description");
        const year = formData.get("year");
        const imageUrl = formData.get("imageUrl");
        const price = formData.get("price");

        if (brand == "" || model == "" || description == "" || year == "" || imageUrl == "" || price == "") {
            return alert("Fill all fields.")
        } else {
            await editCar(ctx.params.id, {
                brand,
                model,
                description,
                year: Number(year),
                imageUrl,
                price: Number(price)
            });
            ctx.page.redirect("/catalog")
        }
    }
}