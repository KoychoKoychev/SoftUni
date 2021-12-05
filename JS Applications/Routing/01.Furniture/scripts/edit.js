import { edit, getItemDetail } from "./data.js";
import { html, page } from "./library.js";

let errors = {
    make: false,
    model: false,
    year: false,
    description: false,
    price: false,
    img: false,
}

const editTemplate = (editItem, data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${editItem}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" value=${data.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model" value=${data.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year" value=${data.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description"
                    value=${data.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" value=${data.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" value=${data.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" value=${data.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
`

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await getItemDetail(id)
    ctx.render(editTemplate(editItem, data, errors));

    async function editItem(ev) {
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
            const obj = {
                make,
                model,
                year,
                description,
                price,
                img,
                material
            }
            const response = await edit(id,obj);
            page.redirect("/details/" + response._id);
        } else {
            ctx.render(editTemplate(editItem, data, errors));
        }

    }
}