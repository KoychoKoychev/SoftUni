import { catalogPage } from "./catalog.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
import { page,render } from "./library.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { logout } from "./requests.js";

const root = document.querySelector(".container");
document.querySelector("#logoutBtn").addEventListener("click",logoutC)

page(decorateContext);
page("/", catalogPage);
page("/index.html", catalogPage);
page("/catalog", catalogPage);
page("/my-furniture", catalogPage);
page("/create", createPage);
page("/edit/:id", editPage);
page("/details/:id", detailsPage);
page("/login", loginPage);
page("/register", registerPage);
page.start();
updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

export function updateUserNav(){
    if(sessionStorage.hasOwnProperty("userData")){
        document.querySelector("#user").style.display = "inline-block";
        document.querySelector("#guest").style.display = "none";
    }else{
        document.querySelector("#user").style.display = "none";
        document.querySelector("#guest").style.display = "inline-block";
    }
}

async function logoutC(){
    await logout();
    page.redirect("/");
}