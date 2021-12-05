import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js"

const section = document.querySelector("#allCats");
cats.map(a => a.info = false);

const template = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${() => onClick(cat)} class="showBtn">${cat.info ? "Hide" : "Show"} status code</button>
            <div class="status" style="display: ${cat.info ? " block" : "none"}" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `)}
</ul>
`;

update();

function update(){
    render(template(cats), section);
}
function onClick(cat) {
    cat.info = !cat.info;
    update();
}