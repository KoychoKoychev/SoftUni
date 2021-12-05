import { addForm } from "./addMovie.js"
import { showHome } from "./app.js";

const movieDetails = document.querySelector("#movie-example");
const deleteBut = movieDetails.querySelector(".btn-danger");
const editBut = movieDetails.querySelector(".btn-warning");
const likeBut = movieDetails.querySelector(".btn-primary")

export async function showEditMovie(ev) {
    ev.preventDefault();
    if (ev.target.tagName == "BUTTON") {
        const id = ev.target.dataset.id;
        const [result, likeRes] = await Promise.all([fetch("http://localhost:3030/data/movies/" + id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)]);
        const [data, likes] = await Promise.all([result.json(), likeRes.json()]);
        movieDetails.querySelector("h1").textContent = `Movie title: ${data.title}`;
        movieDetails.querySelector("img").src = data.img;
        movieDetails.querySelector("p").textContent = data.description;
        const likesInfo = movieDetails.querySelector(".enrolled-span");
        likesInfo.textContent = `Liked ${likes}`;
        likesInfo.style.display = "none";
        deleteBut.dataset.id = id;
        editBut.dataset.id = id;
        likeBut.dataset.id = id;
        if (!sessionStorage.hasOwnProperty("userData")) {
            deleteBut.style.display = "none";
            editBut.style.display = "none";
            likeBut.style.display = "none";
            likesInfo.style.display = "";
        } else if ((JSON.parse(sessionStorage.userData).id == data._ownerId)) {
            deleteBut.style.display = "";
            editBut.style.display = "";
            likeBut.style.display = "none";
            likesInfo.style.display = "";
        } else {
            const userId = JSON.parse(sessionStorage.userData).id;
            deleteBut.style.display = "none";
            editBut.style.display = "none";
            likeBut.style.display = "";
            const result = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
            const data = await result.json();
            console.log(data);
            if (data.length > 0) {
                likeBut.style.display = "none";
                likesInfo.style.display = "";
            }
        }
        document.querySelector(".visible").replaceChildren(movieDetails);
    }
}

editBut.addEventListener("click", edit);
deleteBut.addEventListener("click", del);
likeBut.addEventListener("click", like)

async function edit(ev) {
    ev.preventDefault();
    const id = ev.target.dataset.id;
    const editForm = addForm.cloneNode(true);
    editForm.querySelector("h1").textContent = "Edit Movie";
    document.querySelector(".visible").replaceChildren(editForm);
    const result = await fetch("http://localhost:3030/data/movies/" + id);
    const data = await result.json();
    document.querySelector(".visible").appendChild(editForm);
    const titleField = editForm.querySelector("#title");
    const descrField = editForm.querySelector("textarea");
    const imgField = editForm.querySelector("#imageUrl");
    titleField.value = data.title;
    descrField.value = data.description;
    imgField.value = data.img;
    editForm.querySelector("form").addEventListener("submit", sendEditInfo);
    async function sendEditInfo(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const titleE = formData.get("title");
        const descriptionE = formData.get("description");
        const imageUrlE = formData.get("imageUrl");
        await fetch("http://localhost:3030/data/movies/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": JSON.parse(sessionStorage.userData).token
            },
            body: JSON.stringify({
                title: titleE,
                description: descriptionE,
                img: imageUrlE
            })
        });
        showHome();
    }
}

async function del(ev) {
    ev.preventDefault();
    const id = ev.target.dataset.id;
    await fetch("http://localhost:3030/data/movies/" + id, {
        method: "delete",
        headers: {
            "X-Authorization": JSON.parse(sessionStorage.userData).token
        }
    });
    showHome();
}

async function like(ev) {
    ev.preventDefault();
    const movieId = ev.target.dataset.id;
    const result = await fetch("http://localhost:3030/data/likes", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": JSON.parse(sessionStorage.userData).token
        },
        body: JSON.stringify({
            movieId
        })
    });
    const likesInfo = movieDetails.querySelector(".enrolled-span");
    const currLikes = Number(likesInfo.textContent.split(" ")[1]) + 1;
    likesInfo.textContent = `Liked ${currLikes}`;
    likesInfo.style.display = "";
    likeBut.style.display = "none";
}