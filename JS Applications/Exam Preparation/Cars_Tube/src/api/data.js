import { del, get, post, put } from "./requests.js"


export function getUserData() {
    if (sessionStorage.hasOwnProperty("userData")) {
        return JSON.parse(sessionStorage.userData)
    }
}

export async function loadAllCars() {
    return await get("/data/cars?sortBy=_createdOn%20desc")
}

export async function loadMyCars(userId) {
    return await get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function loadSearched(query) {
    return await get(`/data/cars?where=year%3D${query}`)
}

export async function loadCarById(id) {
    return await get("/data/cars/" + id);
}

export async function createCar(data) {
    return await post("/data/cars", data)
}

export async function editCar(id, data) {
    return await put("/data/cars/" + id, data)
}

export async function deleteCar(id) {
    return await del("/data/cars/" + id)
}