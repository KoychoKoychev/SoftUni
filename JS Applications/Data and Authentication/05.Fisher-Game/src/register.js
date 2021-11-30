window.addEventListener("load",solve);

function solve() {
    if (localStorage.hasOwnProperty("userData")) {
        window.location.replace("./index.html");
    }else{
        document.getElementById("user").style.display = "none";
        document.querySelector("#register-view #register").addEventListener("submit",register);
    }
}

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
    const rePass = formData.get("rePass");
    if (!pattern.test(email)){
        alert("Invalid e-mail. Please try again.");
    };
    if(pass != rePass){
        alert("Passwords do not match. Please try again.");
    };

    const data = {
        email,
        password: pass
    }

    const response = await sendRegRequest(data);
    const outputData = {
        email: response.email,
        id: response._id,
        token: response.accessToken
    }
    localStorage.setItem("userData", JSON.stringify(outputData));
    window.location.replace("./index.html");
}