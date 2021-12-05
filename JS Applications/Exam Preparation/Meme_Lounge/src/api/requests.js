import { notify } from "../notification.js";

const host = "http://localhost:3030";

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (response.ok == false) {
            if (response.status == 403) {
                sessionStorage.clear();
            }
            const err = await response.json();
            throw new Error(err.message);
        }
        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (error) {
        notify(error.message);
        return error;
    }
}

function createOptions(method = "get", data) {
    const options = {
        method,
        headers: {}
    }
    if (data != undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }
    if (sessionStorage.userData != undefined) {
        const userData = JSON.parse(sessionStorage.userData);
        options.headers["X-Authorization"] = userData.token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions("post", data));
}

export async function put(url, data) {
    return request(url, createOptions("put", data));
}

export async function del(url) {
    return request(url, createOptions("delete"));
}

export async function login(email, password) {
    const data = await post("/users/login", { email, password });
    const userData = {
        email: data.email,
        id: data._id,
        username: data.username,
        gender: data.gender,
        token: data.accessToken
    }
    sessionStorage.setItem("userData", JSON.stringify(userData));
}

export async function logout() {
    get("/users/logout");
    sessionStorage.removeItem("userData");
}

export async function register(username, email, password, gender) {
    const data = await post("/users/register", { username, email, password, gender });
    const userData = {
        email: data.email,
        id: data._id,
        username: data.username,
        gender: data.gender,
        token: data.accessToken
    }
    sessionStorage.setItem("userData", JSON.stringify(userData));
}