import { getUserData } from "./api/data.js";
import { logout } from "./api/requests.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { render,page } from "./lib.js";
import { loginPage } from "./login.js";
import { myBooksPage } from "./myBooks.js";
import { registerPage } from "./register.js";


const root = document.querySelector("#site-content");
document.querySelector("#logoutBtn").addEventListener("click",onLogout)

page(decoreateContext);
page("/",homePage);
page("/login",loginPage);
page("/register",registerPage);
page("/create",createPage);
page("/details/:id",detailsPage);
page("/edit/:id",editPage);
page("/my-books",myBooksPage)
page.start();
updateNav();

function decoreateContext(context,next){
    context.render = (content) => render(content,root);
    context.updateUserNav = () => updateNav();
    next();
}


export function updateNav() {
    if(getUserData()){
        document.querySelector("#user").style.display = "block";
        document.querySelector("#guest").style.display = "none";
        document.querySelector("#user span").textContent = `Welcome, ${getUserData().email}`
    }else{
        document.querySelector("#user").style.display = "none";
        document.querySelector("#guest").style.display = "block";
    }
}

async function onLogout(ev) {
    await logout();
    page.redirect("/")
    updateNav();
}