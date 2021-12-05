import { getUserData } from "./api/data.js";
import { logout } from "./api/requests.js";
import { catalogPage } from "./catalog.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { render, page } from "./lib.js"
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";

const root = document.querySelector("#main-content")
document.querySelector("#logoutBtn").addEventListener("click", onLogout)


page(decorateContext);
page("/login", loginPage);
page("/register", registerPage);
page("/home",homePage);
page("/",homePage);
page("/create",createPage);
page("/details/:id",detailsPage);
page("/edit/:id",editPage);
page("/catalog",catalogPage);

page.start();

updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = () => updateUserNav();
    next();
}

export function updateUserNav() {
    if (getUserData()) {
        document.querySelector("#user").style.display = "block";
        document.querySelector("#guest").style.display = "none";
    } else {
        document.querySelector("#user").style.display = "none";
        document.querySelector("#guest").style.display = "block";
    }
}

async function onLogout() {
    logout();
    updateUserNav();
    page.redirect("/home")
}