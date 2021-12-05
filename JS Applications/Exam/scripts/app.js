import { getUserData } from "./api/data.js";
import { logout } from "./api/requests.js";
import { catalogPage } from "./catalog.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { render,page } from "./lib.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { searchPage } from "./search.js";

const main = document.querySelector("#main-content");
document.querySelector("#logoutButton").addEventListener("click",onLogout)


page(decorateContext);
page("/login",loginPage)
page("/register",registerPage);
page("/",homePage);
page("/catalog",catalogPage);
page("/create",createPage);
page("/details/:id",detailsPage);
page("/edit/:id",editPage);
page("/search",searchPage)

page.start();
updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateUserNav = () => updateUserNav();
    next();
}


export function updateUserNav(){
    const loginBtn = document.querySelectorAll("header ul li")[2];
    const registerBtn = document.querySelectorAll("header ul li")[3];
    const createBtn = document.querySelectorAll("header ul li")[4];
    const logoutBtn = document.querySelectorAll("header ul li")[5];

    if(getUserData()){
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";
        createBtn.style.display = "inline";
        logoutBtn.style.display = "inline";
    }else{
        loginBtn.style.display = "inline";
        registerBtn.style.display = "inline";
        createBtn.style.display = "none";
        logoutBtn.style.display = "none";
    }
}

async function onLogout(ev) {
    logout();
    page.redirect("/")
    updateUserNav();
}