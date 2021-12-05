import { html, page } from "./library.js";
import {create} from "./data.js"

let errors = {
    make: false,
    model: false,
    year: false,
    description: false,
    price: false,
    img: false,
}

const createTemplate = (createItem,errors) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${createItem}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control${errors.make ? " is-invalid"  : ""}" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control${errors.model ? " is-invalid"  : ""}" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control${errors.year ? " is-invalid"  : ""}" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control${errors.description ? " is-invalid"  : ""}" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control${errors.price ? " is-invalid"  : ""}" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control${errors.img ? " is-invalid"  : ""}" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>
`

export function createPage(ctx) {
    ctx.render(createTemplate(createItem,errors));

    async function createItem(ev) {
        ev.preventDefault();
        const form = new FormData(ev.target);
        const make = form.get("make");
        const model = form.get("model");
        const year = Number(form.get("year"));
        const description = form.get("description");
        const price = Number(form.get("price"));
        const img = form.get("img");
        const material = form.get("material");

        (make.length < 4) ? errors.make = true : errors.make = false;
        (model.length < 4) ? errors.model = true : errors.model = false;
        (year < 1950 || year > 2050) ? errors.year = true : errors.year = false;
        (description.length < 10) ? errors.description = true : errors.description = false;
        (price <= 0) ? errors.price = true : errors.price = false;
        (img == "") ? errors.img = true : errors.img = false;
        if (!Object.values(errors).includes(true)) {
            const data = {
                make,
                model,
                year,
                description,
                price,
                img,
                material
            }
            const response = await create(data);
            page.redirect("/details/" + response._id);
        } else {
            console.log(errors);
            ctx.render(createTemplate(createItem,errors));
        }

    }
}