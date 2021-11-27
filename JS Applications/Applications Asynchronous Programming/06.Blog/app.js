async function attachEvents() {

    const loadButton = document.getElementById("btnLoadPosts");
    loadButton.addEventListener("click", addPosts);

    const viewButton = document.getElementById("btnViewPost");
    viewButton.addEventListener("click", viewDetails)
}

async function addPosts() {
    const dropDown = document.getElementById("posts");
    if (dropDown.children.length == 0) {
        const data = await loadInfo();
        for (let el in data) {
            const option = e("option", { "value": el });
            option.textContent = data[el].title;
            dropDown.appendChild(option);
        }
    }
}

async function viewDetails() {
    const currentId = document.getElementById("posts").value;
    const postBody = document.getElementById("post-body");
    postBody.textContent = "";
    const postTitle = document.getElementById("post-title");
    postTitle.textContent = "Loading...";

    const commentsHeading = document.querySelector("h2");
    commentsHeading.style.display = "none";

    const commentsSection = document.getElementById("post-comments");
    commentsSection.replaceChildren();

    const [postData, comments] = await Promise.all([
        loadPost(currentId),
        loadCommnets()
    ])

    postTitle.textContent = postData.title;
    postBody.textContent = postData.body;

    commentsHeading.style.display = "";
    for (let el of Object.values(comments)){
        if (el.postId == currentId){
            const comment = e("li",{"id":el.id});
            comment.textContent = el.text;
            commentsSection.appendChild(comment);
        }
    }
}

async function loadInfo() {
    const url = "http://localhost:3030/jsonstore/blog/posts";

    const res = await fetch(url);
    const data = res.json();

    return data;
}

async function loadPost(id) {
    const url = `http://localhost:3030/jsonstore/blog/posts/${id}`;

    const res = await fetch(url);
    const data = res.json();

    return data;
}

async function loadCommnets() {
    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const res = await fetch(url);
    const data = res.json();

    return data;
}


attachEvents();

function e(tag, atrributesObj, ...children) {
    const element = document.createElement(tag);
    for (const [attribute, value] of Object.entries(atrributesObj)) {
        element.setAttribute(attribute, value)
    }
    for (let el of children) {
        element.appendChild(el);
    }
    return element;
}