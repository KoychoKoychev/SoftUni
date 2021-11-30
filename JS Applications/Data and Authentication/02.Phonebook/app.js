function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", showNumbers);
    document.getElementById("btnCreate").addEventListener("click", createNumber);
    document.getElementById("phonebook").addEventListener("click", delNumber);
}

attachEvents();

async function loadNumbers() {
    const url = "http://localhost:3030/jsonstore/phonebook";
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function addNumber(input) {
    const url = "http://localhost:3030/jsonstore/phonebook";
    const res = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    });
    const data = res.json();
    return data;
}

async function del(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/`+id;
    const res = await fetch(url,{
        method: "delete"
    })
    const data = res.json();
    return data
}

async function showNumbers() {
    const ul = document.getElementById("phonebook");
    ul.replaceChildren();
    const data = await loadNumbers();
    for (let el of Object.values(data)) {
        const currentLi = document.createElement("li");
        const delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.dataset.id = el._id;
        currentLi.textContent = `${el.person}:${el.phone}`
        currentLi.appendChild(delButton);
        ul.appendChild(currentLi);
    }
}

async function createNumber() {
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    if (personInput.value != "" && phoneInput.value != "") {
        const data = {
            person: personInput.value,
            phone: phoneInput.value,
        }
        document.getElementById("phonebook").replaceChildren();
        await Promise.all([addNumber(data),showNumbers()]);
        personInput.value = "";
        phoneInput.value = "";
    }
}

async function delNumber(ev) {
    if (ev.target.tagName == 'BUTTON'){
        const id = ev.target.dataset.id;
        document.getElementById("phonebook").replaceChildren();
        await del(id);
        await showNumbers();
    }
}

