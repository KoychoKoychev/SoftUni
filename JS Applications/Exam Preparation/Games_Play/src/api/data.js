import { del, get, post, put } from "./requests.js"


export function getUserData() {
    if (sessionStorage.hasOwnProperty("userData")) {
        return JSON.parse(sessionStorage.userData)
    }
}

export async function loadAllGames() {
    return await get("/data/games?sortBy=_createdOn%20desc&distinct=category")
}

export async function createGame(data) {
    return await post("/data/games", data)
}

export async function loadGameById(id) {
    return await get("/data/games/" + id);
}

export async function deleteGame(id) {
    return await del("/data/games/" + id)
}

export async function editGame(id, data) {
    return await put("/data/games/" + id, data)
}

export async function getAllComments(gameId) {
    return await get(`/data/comments?where=gameId%3D%22${gameId}%22`)
}

export async function postComment(data) {
    return await post("/data/comments",data)
}