import { del, get, post, put } from "./requests.js"

const endpoints = {
    loadItems: "/data/catalog",
    loadMyItems: (id) => `/data/catalog?where=_ownerId%3D%22${id}%22`,
    loadOneItem: "/data/catalog/",
    delSelItem: "/data/catalog/",
    createItem: "/data/catalog",
    editSelItem: "/data/catalog/",
}

export async function getItemsAll() {
    return get(endpoints.loadItems);
}

export async function getItemsPersonal(id) {
    return get(endpoints.loadMyItems(id));
}

export async function getItemDetail(id) {
    return get(endpoints.loadOneItem + id)
}

export async function delSelItem(id) {
    return del(endpoints.delSelItem + id)
}

export async function create(data) {
    return post(endpoints.createItem, data)
}

export async function edit(id, data) {
    return put(endpoints.editSelItem + id, data)
}