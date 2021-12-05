import { delSelItem, getItemDetail } from "./data.js";
import { html, page } from "./library.js";


const detailsTemplate = (data, userId, delItem) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${data.img} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
        ${userId == data._ownerId ? html`
        <div>
            <a href=${"/edit/" + data._id} class="btn btn-info">Edit</a>
            <a href="javascript:void(0)" @click=${delItem} class="btn btn-red">Delete</a>
        </div>
        ` : ""}
    </div>
</div>
`

export async function detailsPage(ctx) {
    const id = ctx.params.id
    let userId = undefined
    if (sessionStorage.hasOwnProperty("userData")) {
        userId = JSON.parse(sessionStorage.userData).id
    }
    const data = await getItemDetail(id)
    console.log(id);
    ctx.render(detailsTemplate(data, userId, delItem))

    async function delItem() {
        await delSelItem(id);
        page.redirect("/");
    }
}