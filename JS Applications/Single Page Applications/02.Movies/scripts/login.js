import { showHome, showUserButtons } from "./app.js";

const logForm = document.querySelector("#form-login");
export function showLoginForm() {
    document.querySelector(".visible").replaceChildren(logForm);
}

const form = logForm.querySelector("form");
form.addEventListener("submit", login);
async function login(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }
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
            const userData = {
                email:data.email,
                id:data._id,
                token: data.accessToken
            }
            sessionStorage.setItem("userData",JSON.stringify(userData));
            form.reset();
            showHome();
            showUserButtons();
        }

    } catch (error) {
        alert(error.message)
    }
}