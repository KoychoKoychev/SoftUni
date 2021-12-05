export async function loadPosts() {
    const result = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts");
    try {
        if (result.ok != true) {
            const err = result.message;
            throw new Error(err);
        } else {
            const data = result.json();
            return data;
        }
    } catch (er) {
        alert(er.message);
    }
}

export function e(tag, atrributesObj, ...children) {
    const element = document.createElement(tag);
    if (atrributesObj) {
        for (const [attribute, value] of Object.entries(atrributesObj)) {
            element.setAttribute(attribute, value)
        }
    }
    for (let el of children) {
        if (typeof el == "string") {
            element.append(el);
        } else {
            element.appendChild(el);
        }
    }
    return element;
}