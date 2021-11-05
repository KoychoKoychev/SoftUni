function solution() {
    const inputField = document.getElementsByTagName("input")[0];
    const addButton = document.querySelector("button");
    addButton.addEventListener("click", add);

    function add(ev) {
        
        const li = document.createElement("li");
        li.classList.add("gift");
        li.textContent = inputField.value;

        const sendButton = document.createElement("button");
        const discardButton = document.createElement("button");

        sendButton.id = "sendButton"
        sendButton.textContent = "Send"
        sendButton.addEventListener("click",send);

        discardButton.id = "discardButton"
        discardButton.textContent = "Discard"
        discardButton.addEventListener("click",discard)

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        inputField.value = "";

        const giftsList = document.querySelectorAll(".card ul")[0]

        giftsList.appendChild(li);


        const items = document.querySelectorAll(".card ul")[0].childNodes;
        let sorted = s(items);
        for (let el of Array.from(sorted)){
            giftsList.appendChild(el);
        }
    }

    function send(ev) {
        const currLi = ev.target.parentNode;
        const sendList = document.querySelectorAll(".card ul")[1];

        currLi.removeChild(currLi.querySelector("button"));
        currLi.removeChild(currLi.querySelector("button"));

        sendList.appendChild(currLi);
    }
    function discard(ev) {
        const currLi = ev.target.parentNode;
        const delList = document.querySelectorAll(".card ul")[2];

        currLi.removeChild(currLi.querySelector("button"));
        currLi.removeChild(currLi.querySelector("button"));

        delList.appendChild(currLi);
    }

    function s(nodes) {
        let arr = Array.from(nodes)
        return arr.sort((a,b)=>a.textContent.localeCompare(b.textContent));
    }
}