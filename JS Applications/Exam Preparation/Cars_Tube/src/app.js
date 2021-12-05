import { getUserData } from "./api/data.js";
import { logout } from "./api/requests.js";
import { catalogPage } from "./catalog.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { page, render } from "./lib.js"
import { loginPage } from "./login.js";
import { myCarsPage } from "./myCars.js";
import { registerPage } from "./register.js";
import { searchPage } from "./search.js";

const root = document.querySelector("#site-content");
document.querySelector("#logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/login", loginPage);
page("/register",registerPage);
page("/home",homePage);
page("/",homePage);
page("/catalog",catalogPage);
page("/my-listings",myCarsPage);
page("/create",createPage);
page("/details/:id",detailsPage);
page("/edit/:id",editPage);
page("/search",searchPage)


page.start();

updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = () => updateUserNav();
    next();
}
export function updateUserNav() {
    if (getUserData()) {
        document.querySelector("#profile").style.display = "block";
        document.querySelector("#guest").style.display = "none";
        document.querySelector("#profile a").textContent = `Welcome, ${getUserData().username}`
    } else {
        document.querySelector("#profile").style.display = "none";
        document.querySelector("#guest").style.display = "block";
    }
}

async function onLogout() {
    logout();
    updateUserNav();
    page.redirect("/home")
}