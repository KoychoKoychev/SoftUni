import { showHome, showUserButtons } from "./app.js";

const regForm = document.querySelector("#form-sign-up");
export function showRegisterForm() {
    document.querySelector(".visible").replaceChildren(regForm);
}

const form = regForm.querySelector("form");
form.addEventListener("submit", register)

async function sendRegRequest(data) {
    const url = "http://localhost:3030/users/register";
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

async function register(ev) {
    ev.preventDefault();
    const pattern = /[\w]+@[\w]+\.[a-z]+$/;
    const formData = new FormData(ev.target);
    const email = formData.get("email");
    const pass = formData.get("password");
    const rePass = formData.get("repeatPassword");
    if (!pattern.test(email)) {
        alert("Invalid e-mail. Please try again.");
    };
    if (pass != rePass) {
        alert("Passwords do not match. Please try again.");
    };

    const data = {
        email,
        password: pass
    }
    if (pattern.test(email) && pass == rePass) {
        const response = await sendRegRequest(data);
        if (response) {
            const outputData = {
                email: response.email,
                id: response._id,
                token: response.accessToken
            }
            sessionStorage.setItem("userData", JSON.stringify(outputData));
            ev.target.reset();
            showUserButtons();
            showHome();
        }
    }
}