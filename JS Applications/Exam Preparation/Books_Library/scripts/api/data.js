import { del, get, post, put } from "./requests.js"


export function getUserData() {
    if (sessionStorage.hasOwnProperty("userData")) {
        return JSON.parse(sessionStorage.userData)
    }
}

export async function getAllBooks() {
    return await get(`/data/books?sortBy=_createdOn%20desc`);
}

export async function getMyBooks(userId) {
    return await get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function addBook(data) {
    return await post("/data/books",data);
}

export async function getBookById(id) {
    return await get("/data/books/"+id)
}

export async function delBook(id) {
    return await del("/data/books/"+id);
}

export async function editBook(id,data) {
    return await put("/data/books/"+id,data);
}

export async function likeBook(bookId) {
    return await post("/data/likes",{bookId})
}

export async function getTotalLikes(bookId) {
    return await get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function checkIfLiked(bookId,userId) {
    return await get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}