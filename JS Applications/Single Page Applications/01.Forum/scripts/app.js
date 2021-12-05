import { e, loadPosts } from "./dom.js";
import { displayTopic } from "./posts.js";

const home = document.querySelector("#homePage");
function showHome() {
    document.querySelector(".container").replaceChildren(home);
    displayPosts();
};
showHome();

document.querySelector("#home").addEventListener("click",(ev)=>{
    ev.preventDefault();
    showHome();
})

async function displayPosts() {
    const data = await loadPosts();
    document.querySelector(".topic-title").replaceChildren();
    Object.values(data).forEach(el => {
        const name = e("span", null, el.username);
        const user = e("p", null, "Username: ", name);
        const nameDiv = e("div", { "class": "nick-name" }, user);
        const time = e("time", null, el.dateCreated);
        const dateP = e("p", null, "Date: ", time);
        const dateDiv = e("div", null, dateP, nameDiv);
        const colDiv = e("div", { "class": "columns" }, dateDiv);
        const title = e("h2", {"_id":el._id}, el.topicName);
        const aRef = e("a", { "href": "#", "class": "normal" }, title);
        const topicDiv = e("div", { "class": "topic-name" }, aRef, colDiv);
        const wraperDiv = e("div", { "class": "topic-name-wrapper" }, topicDiv);
        const containerDiv = e("div", { "class": "topic-container","_id":el._id }, wraperDiv);
        document.querySelector(".topic-title").appendChild(containerDiv);

    })
}

const createForm = document.getElementById("newTopic");
createForm.addEventListener("submit", submit);
document.getElementById("clear").addEventListener("click", (ev) => {
    ev.preventDefault()
    ev.target.parentNode.parentNode.reset()
});

async function submit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const username = formData.get("username");
    const topicName = formData.get("topicName");
    const postText = formData.get("postText");
    const dateNow = new Date();
    const dateCreated = dateNow.toISOString().slice(0, -5).split("T").join(" ");

    if (username && topicName && postText && ev.target.id != "clear") {
        const obj = {
            username,
            topicName,
            postText,
            dateCreated
        }
        const result = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        ev.target.reset();
        displayPosts();
        try {
            if (result.ok == false) {
                const err = result.message;
                throw new Error(err);
            }
        } catch (e) {
            alert(e.message)
        }
    } else {
        alert("Please fill all the fileds.")
    }
}

document.querySelector(".topic-title").addEventListener("click",showPost);

function showPost(ev) {
    ev.preventDefault();
    if (ev.target.hasAttribute("_id")){
        displayTopic(ev.target.getAttribute("_id"));
    }
};