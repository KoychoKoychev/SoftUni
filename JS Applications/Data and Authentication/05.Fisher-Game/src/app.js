window.addEventListener("load", solve);

async function solve() {
    if (localStorage.hasOwnProperty("userData")) {
        document.getElementById("guest").style.display = "none";
        const userData = JSON.parse(localStorage.userData)
        document.querySelector("nav p span").textContent = userData.email;
        document.querySelector("#addForm button").disabled = false;
    } else {
        document.getElementById("user").style.display = "none";
    }


    document.getElementById("logout").addEventListener("click", logout);
    document.querySelector("aside .load").addEventListener("click", displayCatches);
    document.querySelector("#catches").addEventListener("click", edit);
    document.querySelector("#catches").addEventListener("click", del);
    document.getElementById("addForm").addEventListener("submit", addCatch);


    await displayCatches();
}

async function logout() {
    const url = "http://localhost:3030/users/logout";
    const response = await fetch(url, {
        headers: {
            "X-Authorization": JSON.parse(localStorage.userData).token
        }
    });
    try {
        if (response.ok != true) {
            const data = await response.json();
            throw new Error(data.message);
        } else {
            localStorage.clear();
            location.reload();
        }
    } catch (error) {
        alert(error.message)
    }
}

async function loadCatches() {
    const url = "http://localhost:3030/data/catches";
    const response = await fetch(url);
    try {
        if (response.ok != true) {
            const data = await response.json();
            throw new Error(data.message);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        alert(error.message)
    }
}

async function editCatch(id, obj) {
    const url = "http://localhost:3030/data/catches/" + id;
    const response = await fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": JSON.parse(localStorage.userData).token
        },
        body: JSON.stringify(obj)
    });
    try {
        if (response.ok != true) {
            const data = await response.json();
            throw new Error(data.message);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        alert(error.message)
    }
}

async function deleteCatch(id) {
    const url = "http://localhost:3030/data/catches/" + id;
    const response = await fetch(url, {
        method: "delete",
        headers: {
            "X-Authorization": JSON.parse(localStorage.userData).token
        },
    });
    try {
        if (response.ok != true) {
            const data = await response.json();
            throw new Error(data.message);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        alert(error.message)
    }
}

async function createCatch(obj) {
    const url = "http://localhost:3030/data/catches/";
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": JSON.parse(localStorage.userData).token
        },
        body: JSON.stringify(obj)
    });
    try {
        if (response.ok != true) {
            const data = await response.json();
            throw new Error(data.message);
        } else {
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        alert(error.message)
    }
}

async function displayCatches() {
    const allCatches = await loadCatches();
    const catches = document.getElementById("catches");
    catches.replaceChildren(...allCatches.map(createCatchElement));
}

function createCatchElement(obj) {
    let userId = "";
    if (localStorage.hasOwnProperty("userData")) {
        let data = JSON.parse(localStorage.userData);
        userId = data.id;
    }
    let isDisabled = false;
    if (obj._ownerId != userId) {
        isDisabled = true;
    }
    const anglerLabel = e("label");
    anglerLabel.textContent = "Angler";
    const anglerInput = e("input", { "type": "text", "class": "angler", "value": obj.angler });
    anglerInput.disabled = isDisabled;

    const weightLabel = e("label");
    weightLabel.textContent = "Weight";
    const weightInput = e("input", { "type": "text", "class": "weight", "value": obj.weight });
    weightInput.disabled = isDisabled;

    const speciesLabel = e("label");
    speciesLabel.textContent = "Species";
    const speciesInput = e("input", { "type": "text", "class": "species", "value": obj.species });
    speciesInput.disabled = isDisabled;

    const locationLabel = e("label");
    locationLabel.textContent = "Location";
    const locationInput = e("input", { "type": "text", "class": "location", "value": obj.location });
    locationInput.disabled = isDisabled;

    const baitLabel = e("label");
    baitLabel.textContent = "Bait";
    const baitInput = e("input", { "type": "text", "class": "bait", "value": obj.bait });
    baitInput.disabled = isDisabled;

    const captureTimeLabel = e("label");
    captureTimeLabel.textContent = "Capture Time";
    const captureTimeInput = e("input", { "type": "text", "class": "captureTime", "value": obj.captureTime });
    captureTimeInput.disabled = isDisabled;

    const updateButton = e("button", { "class": "update", "data-id": obj._id });
    updateButton.textContent = "Update";
    updateButton.disabled = isDisabled;

    const deleteButton = e("button", { "class": "delete", "data-id": obj._id });
    deleteButton.textContent = "Delete";
    deleteButton.disabled = isDisabled;

    const div = e("div", { "class": "catch" }, anglerLabel, anglerInput, weightLabel, weightInput, speciesLabel, speciesInput, locationLabel, locationInput, baitLabel, baitInput, captureTimeLabel, captureTimeInput, updateButton, deleteButton);
    return div;
}

async function edit(ev) {
    if (ev.target.tagName == "BUTTON" && ev.target.textContent == "Update") {
        const id = ev.target.dataset.id;
        const form = ev.target.parentNode;
        const angler = form.querySelector(".angler").value;
        const weight = form.querySelector(".weight").value;
        const species = form.querySelector(".species").value;
        const location = form.querySelector(".location").value;
        const bait = form.querySelector(".bait").value;
        const captureTime = form.querySelector(".captureTime").value;

        const obj = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        }
        const result = await editCatch(id, obj);
        if (result.hasOwnProperty("_updatedOn")) {
            alert("Update Succesful !")
        }
    }
}

async function del(ev) {
    if (ev.target.tagName == "BUTTON" && ev.target.textContent == "Delete") {
        const id = ev.target.dataset.id;
        await deleteCatch(id);
        ev.target.parentNode.remove();
    }
}

async function addCatch(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const angler = formData.get("angler");
    const weight = formData.get("weight");
    const species = formData.get("species");
    const location = formData.get("location");
    const bait = formData.get("bait");
    const captureTime = formData.get("captureTime");
    const obj = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
    }
    await createCatch(obj);
    ev.target.reset();
    await displayCatches();
}

function e(tag, atrributesObj, ...children) {
    const element = document.createElement(tag);
    if (atrributesObj) {
        for (const [attribute, value] of Object.entries(atrributesObj)) {
            element.setAttribute(attribute, value)
        }
    }
    for (let el of children) {
        element.appendChild(el);
    }
    return element;
}