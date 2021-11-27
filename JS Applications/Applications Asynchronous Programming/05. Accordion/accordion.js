window.addEventListener("load",solution)

async function solution() {
    const main = document.getElementById("main");

    const articlesArr = await getArticles();

    for(const el of articlesArr){
        const paragraph = e("p",{});
        const extraDiv = e("div",{"class":"extra"},paragraph);
        extraDiv.style.display = "none";

        const title = e("span",{});
        title.textContent = el.title;

        const button = e("button",{"class":"button","id":el._id});
        button.addEventListener("click",showInfo);
        button.textContent = "More";
        const headDiv = e("div",{"class":"head"},title,button)

        const accordationDiv = e("div",{"class":"accordion"},extraDiv,headDiv);

        main.appendChild(accordationDiv);
    }
}

async function getArticles() {
    const url = "http://localhost:3030/jsonstore/advanced/articles/list";

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getDetails(id) {
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function showInfo(ev) {
    const parentDiv = ev.target.parentNode.parentNode;
    const id = ev.target.id;


    const extraDiv = parentDiv.querySelector(".extra");
    const paragraph = parentDiv.querySelector(".extra p");
    if (paragraph.textContent == ""){
        const details = await getDetails(id);
        const content = details.content;
        paragraph.textContent = content;
    }
    if (ev.target.textContent == "More"){
        ev.target.textContent = "Less"
        extraDiv.style.display = "block";
    }else{
        ev.target.textContent = "More";
        extraDiv.style.display = "none";
    }

}

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