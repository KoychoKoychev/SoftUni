import { e } from "./dom.js";

export async function displayTopic(id) {
    const obj = await getTopic(id);

    // <- Post view ->
    const title = e("h2", null, obj.topicName);
    const titleDiv = e("div", { "class": "theme-name" }, title);
    const titleWrap = e("div", { "class": "theme-name-wrapper" }, titleDiv);
    const titleTheme = e("div", { "class": "theme-title" }, titleWrap);

    const avatar = e("img", { "src": "./static/profile.png", "alt": "avatar" });
    const time = e("time", null, obj.dateCreated);
    const usernameSpan = e("span", null, obj.username);
    const createP = e("p", null, usernameSpan, " posted on ", time);
    const contentP = e("p", { "class": "post-content" }, obj.postText);
    const headDiv = e("div", { "class": "avatar" }, avatar, createP, contentP);

    const userCommentDiv = e("div", { "id": "user-comment" }, ...await loadComments(id));

    const commentDiv = e("div", { "class": "comment" }, headDiv, userCommentDiv);

    //input block
    const userInput = e("input", { "type": "text", "name": "username", "id": "username" });
    const nameSpan = e("span", { "class": "red" }, "*")
    const nameLabel = e("label", { "for": "username" }, "Username ", nameSpan);
    const nameDiv = e("div", nameLabel, userInput);
    const textArea = e("textarea", { "cols": "30", "rows": "10", "name": "postText", "id": "comment" });
    const button = e("button", { "_id": id }, "Post");
    const form = e("form", { "_id": id }, textArea, nameDiv, button);
    form.addEventListener("submit", submitComment);
    const answerDiv = e("div", { "class": "answer" }, form);
    const userSpan = e("span", null, "currentUser")
    const commentP = e("p", null, userSpan, " comment:");
    const ansDiv = e("div", { "class": "answer-comment" }, commentP, answerDiv);

    const themeContent = e("div", { "class": "theme-content" }, titleTheme, commentDiv, ansDiv);

    document.querySelector(".container").replaceChildren(themeContent);
}



async function getTopic(id) {
    const result = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts/" + id);
    try {
        if (result.ok != true) {
            const error = result.message;
            throw new Error(error)
        } else {
            const data = await result.json();
            return data;
        }
    } catch (er) {
        alert(er.message)
    }
}

async function loadComments(id) {
    const result = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments/");
    const data = await result.json();
    const filtered = Object.values(data).filter(e => id == e.topicId);
    const commentsArr = [];
    filtered.forEach(el => {
        const postP = e("p",null,el.postText);
        const postDiv =e("div",{ "class": "post-content" },postP);
        const time = e("time",null,el.dateCreated);
        const user = e("strong",null,el.username);
        const userP = e("p",null,user," commented on ",time);
        const topicDiv = e("div",{ "class": "topic-name" },userP,postDiv);
        const topicWrap = e("div",{ "class": "topic-name-wrapper" },topicDiv);
        const commentDiv = e("div",{ "id": "user-comment" },topicWrap);
        commentsArr.push(commentDiv);
    })

    return commentsArr;
}

async function submitComment(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const username = formData.get("username");
    const postText = formData.get("postText");
    const id = ev.target.getAttribute("_id");
    const dateNow = new Date();
    const dateCreated = dateNow.toISOString().slice(0, -5).split("T").join(" ");
    if (username && postText) {
        const obj = {
            username,
            postText,
            topicId: id,
            dateCreated
        }
        const result = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        ev.target.reset();
        displayTopic(id);
        try {
            if (result.ok != true) {
                throw new Error(result.message)
            }
        } catch (er) {
            alert(er.message)
        }
    }
}
