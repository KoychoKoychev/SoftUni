import { showLoginForm } from "./login.js";
import { showRegisterForm } from "./register.js";
import { showAddMovie } from "./addMovie.js";
import { e } from "./dom.js";
import { showEditMovie } from "./editMovie.js";

document.querySelector(".navbar-brand.text-light").addEventListener("click", showHome);

const addButton = document.getElementById("add-movie-button");
const heading = document.querySelector("h1.text-center");
const movies = document.getElementById("movie");
const main = document.querySelector("main.visible");

export function showHome() {
    if (sessionStorage.hasOwnProperty("userData")) {
        main.replaceChildren(heading, addButton, movies);
    } else {
        main.replaceChildren(heading, movies);
    }
    loadMovies();
}
if (sessionStorage.hasOwnProperty("userData")) {
    showUserButtons();
} else {
    showGuestButtons();
}

showHome();

export function showGuestButtons() {
    const wrap = document.querySelector(".navbar-nav.ml-auto")
    wrap.children[0].querySelector(".nav-link").textContent = `Welcome, guest`;
    wrap.children[1].style.display = "none";
    wrap.children[2].style.display = "inline";
    wrap.children[3].style.display = "inline";
}

export function showUserButtons() {
    const email = JSON.parse(sessionStorage.getItem("userData")).email;
    const wrap = document.querySelector(".navbar-nav.ml-auto");
    wrap.children[0].querySelector(".nav-link").textContent = `Welcome, ${email}`;
    wrap.children[1].style.display = "inline";
    wrap.children[2].style.display = "none";
    wrap.children[3].style.display = "none";
}

document.querySelector(".navbar-nav.ml-auto").children[3].addEventListener("click", showRegisterForm);
document.querySelector(".navbar-nav.ml-auto").children[2].addEventListener("click", showLoginForm);
document.querySelector(".btn.btn-warning").addEventListener("click", showAddMovie);

document.querySelector(".navbar-nav.ml-auto").children[1].addEventListener("click", logout);

async function logout(ev) {
    ev.preventDefault();
    sessionStorage.clear();
    const url = "http://localhost:3030/users/logout";
    try {
    const response = await fetch(url, {
        headers: {
            "X-Authorization": JSON.parse(sessionStorage.userData).token
        }
    });
        if (response.ok != true) {
            const data = await response.json();
            showLoginForm();
            showGuestButtons();
            throw new Error(data.message);
        } else {
            showLoginForm();
            showGuestButtons();

        }
    } catch (error) {
        showLoginForm();
        showGuestButtons();
    }
}

async function loadMovies() {
    document.querySelector(".card-deck.d-flex.justify-content-center").textContent="Loading...";
    const result = await fetch("http://localhost:3030/data/movies");
    const data = await result.json();
    document.querySelector(".card-deck.d-flex.justify-content-center").replaceChildren();
    data.forEach(el => {
        const img = e("img", { "class": "card-img-top", "src": el.img, "alt": "Card image cap", "width": 400 })
        const titleH = e("h4", { "class": "card-title" }, el.title);
        const cardDiv = e("div", { "class": "card-body" }, titleH);
        const detButton = e("button", { "class": "btn btn-info", "type": "button","data-id":el._id }, "Details");
        const footA = e("a", { "href": "#" }, detButton);
        const footer = e("div", { "class": "card-footer" }, footA);
        const div = e("div", { "class": "card mb-4" }, img, cardDiv, footer);
        document.querySelector(".card-deck.d-flex.justify-content-center").appendChild(div)
    });
}

document.querySelector("#movie").addEventListener("click",showEditMovie);