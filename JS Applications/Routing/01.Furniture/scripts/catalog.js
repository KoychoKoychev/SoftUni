import { updateUserNav } from "./app.js";
import { getItemsAll, getItemsPersonal } from "./data.js";
import { html} from "./library.js";

const itemTemplate = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${item.img} />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price}</span></p>
            </footer>
            <div>
                <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>
`
const catalogTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
${data.map(itemTemplate)}
</div>
`

export async function catalogPage(ctx) {
    let data;
    if(sessionStorage.hasOwnProperty("userData") && ctx.pathname=="/my-furniture"){
        const id = JSON.parse(sessionStorage.userData).id
        data = await getItemsPersonal(id);
    }else{
        data = await getItemsAll();
    }
    ctx.render(catalogTemplate(data));
    updateUserNav();
}