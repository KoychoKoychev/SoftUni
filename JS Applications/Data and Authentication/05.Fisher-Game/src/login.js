window.addEventListener("DOMContentLoaded", solve)
function solve() {
    if (localStorage.hasOwnProperty("userData")) {
        window.location.replace("./index.html");
    }
    const form = document.querySelector("#login-view #login");
    form.addEventListener("submit", submit);
    document.getElementById("user").style.display = "none";
}

async function loginRequest(data) {
    const url = "http://localhost:3030/users/login";
    const result = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    try {
        if (result.ok != true) {
            const data = await result.json();
            throw new Error(data.message);
        } else {
            const data = await result.json();
            return data;
        }

    } catch (error) {
        alert(error.message)
    }
}

async function submit(ev) {
    ev.preventDefault();
    const form = new FormData(ev.target);
    const email = form.get("email");
    const password = form.get("password");
    const obj = {
        email,
        password
    }
    const response = await loginRequest(obj);
    const outputData = {
        email: response.email,
        id: response._id,
        token: response.accessToken
    }
    localStorage.setItem("userData", JSON.stringify(outputData));
    window.location.replace("./index.html");
}