import { getUserData } from "./api/data.js";
import { logout } from "./api/requests.js";
import { catalogPage } from "./catalog.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { render, page } from "./lib.js";
import { loginPage } from "./login.js";
import { profilePage } from "./profile.js";
import { registerPage } from "./register.js";


const root = document.querySelector("main");
document.querySelector("#logoutBtn").addEventListener("click", onLogout)


page(decorateContext);
page("/", homePage);
page("/catalog",catalogPage)
page("/register",registerPage)
page('/login', loginPage)
page('/create', createPage)
page('/details/:id',detailsPage)
page('/edit/:id',editPage)
page('/profile',profilePage)


page.start()

updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

export function updateUserNav() {
    if (getUserData()) {
        const userData = getUserData()
        document.querySelector(".user").style.display = "block";
        document.querySelector(".guest").style.display = "none";
        document.querySelector(".user span").textContent = `Welcome ${userData.email}`
    } else {
        document.querySelector(".user").style.display = "none";
        document.querySelector(".guest").style.display = "block";
    }
}

async function onLogout() {
    logout();
    page.redirect("/");
    updateUserNav();
}