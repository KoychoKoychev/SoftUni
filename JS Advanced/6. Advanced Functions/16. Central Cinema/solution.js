function solve() {
    const inputName = document.getElementById("container").children[0]
    const inputHall = document.getElementById("container").children[1]
    const inputPrice = document.getElementById("container").children[2]
    const archiveList = document.querySelector("#archive ul");
    const addButton = document.querySelector("#container button");
    const clearButton = document.querySelector("#archive button");
    clearButton.addEventListener("click",clear);
    addButton.addEventListener("click", add);
    function add(e) {
        e.preventDefault()
        if (inputName.value != "" && inputHall.value != "" && inputPrice.value != "" && !isNaN(Number(inputPrice.value))) {
            let newMovie = `<li>
            <span>${inputName.value}</span>
            <strong>Hall: ${inputHall.value}</strong>
            <div>
            <strong>${Number(inputPrice.value).toFixed(2)}</strong>
            <input placeholder="Tickets Sold">
            <button>Archive</button>
            </div>
            </li>`
            document.querySelector("#movies ul").innerHTML += newMovie;
            let list = document.querySelectorAll("#movies ul button");
            for (let i = 0; i < list.length; i++) {
                list[i].addEventListener("click", archive);
            }
            inputName.value = "";
            inputHall.value = "";
            inputPrice.value = "";
        }
    }
    function archive(ev) {
        // ev.preventDefault()
        let quantity = ev.target.previousElementSibling.value;
        let currentLine = ev.target.parentNode.parentNode
        if (!isNaN(Number(quantity)) && quantity != "") {
            let newArchive = `<li>
            <span>${currentLine.querySelector("span").textContent}</span>
            <strong>Total amount: ${(Number(currentLine.querySelector("div>strong").textContent) * Number(quantity)).toFixed(2)}</strong>
            <button>Delete</button>
            </li>
            `
            archiveList.innerHTML += newArchive;
            currentLine.remove()
            let list = archiveList.querySelectorAll("button");
            for (let i = 0; i < list.length; i++) {
                list[i].addEventListener("click", del);
            }
        }
    }
    function del(ev){
        ev.target.parentNode.remove();
    }
    function clear(ev){
        let list2 = ev.target.previousElementSibling.innerHTML = "";
    }
}