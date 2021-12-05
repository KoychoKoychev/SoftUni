import { del, get, post, put } from "./requests.js"


export function getUserData() {
    if (sessionStorage.hasOwnProperty("userData")) {
        return JSON.parse(sessionStorage.userData)
    }
}

export async function getAllMemes() {
    return await get("/data/memes?sortBy=_createdOn%20desc")
}

export async function createMeme(data) {
    return await post("/data/memes", data);
}

export async function getMemeByID(id) {
    return await get("/data/memes/" + id)
}

export async function delMeme(id) {
    return await del("/data/memes/" + id)
}

export async function editMeme(id, data) {
    return await put("/data/memes/" + id, data);
}

export async function getMyMemes(id) {
    return await get(`/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)
}
