window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById("genre");
    const nameField = document.getElementById("name");
    const authorField = document.getElementById("author");
    const dateField = document.getElementById("date");
    const addButton = document.getElementById("add-btn");
    addButton.addEventListener("click", add);

    function add(ev) {
        ev.preventDefault();
        if (genreField.value != ""
            && nameField.value != ""
            && authorField.value != ""
            && dateField.value != "") {
            // console.log("add");

            const hitsDiv = document.createElement("div");
            hitsDiv.classList.add("hits-info");
            const image = document.createElement("img");
            image.setAttribute("src", "./static/img/img.png");
            const genreH2 = document.createElement("h2");
            genreH2.textContent = `Genre: ${genreField.value}`
            const nameH2 = document.createElement("h2");
            nameH2.textContent = `Name: ${nameField.value}`
            const authorH2 = document.createElement("h2");
            authorH2.textContent = `Author: ${authorField.value}`
            const dateH3 = document.createElement("h3");
            dateH3.textContent = `Date: ${dateField.value}`;

            const saveButton = document.createElement("button");
            saveButton.classList.add("save-btn")
            saveButton.addEventListener("click", save);
            saveButton.textContent = "Save song";

            const likeButton = document.createElement("button");
            likeButton.classList.add("like-btn");
            likeButton.addEventListener("click", like);
            likeButton.textContent = "Like song"

            const delButton = document.createElement("button");
            delButton.classList.add("delete-btn");
            delButton.addEventListener("click", del)
            delButton.textContent = "Delete"

            const collection = document.querySelector(".all-hits-container");

            hitsDiv.appendChild(image);
            hitsDiv.appendChild(genreH2);
            hitsDiv.appendChild(nameH2);
            hitsDiv.appendChild(authorH2);
            hitsDiv.appendChild(dateH3);
            hitsDiv.appendChild(saveButton);
            hitsDiv.appendChild(likeButton);
            hitsDiv.appendChild(delButton);

            collection.appendChild(hitsDiv)

            genreField.value = "";
            nameField.value = "";
            authorField.value = "";
            dateField.value = "";
        }
    }

    function save(ev) {
        const currList = ev.target.parentNode;
        const saveBut = currList.querySelector(".save-btn");
        const likeBut = currList.querySelectorAll("button")[1];

        const savedList = document.querySelector(".saved-container");

        saveBut.remove();
        likeBut.remove();

        savedList.appendChild(currList);
    }
    function like(ev) {
        let totalLikes = document.querySelector(".likes p");
        let numOfLikes = Number(totalLikes.textContent.split(": ")[1]);
        numOfLikes++;
        totalLikes.textContent = `Total Likes: ${numOfLikes}`

        ev.target.disabled = true;
    }
    function del(ev) {
        const currList = ev.target.parentNode;
        currList.remove();
    }
}