import { del, get, post, put } from "./requests.js"


export function getUserData() {
    if (sessionStorage.hasOwnProperty("userData")) {
        return JSON.parse(sessionStorage.userData)
    }
}

export async function getAllAlbums() {
    return await get("/data/albums?sortBy=_createdOn%20desc&distinct=name");
}

export async function getAlbumById(id) {
    return await get("/data/albums/" + id);
}

export async function delAlbum(id) {
    return await del("/data/albums/" + id);
}

export async function createAlbum(data) {
    return await post("/data/albums", data);
}

export async function editAlbum(id, data) {
    return await put("/data/albums/" + id, data);
}

export async function getSearched(query) {
    return await get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}