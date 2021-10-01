function addItem() {
    let text = document.getElementById("newItemText").value;
    const listItem = document.getElementById("items");
    const newItem = document.createElement('li');

    const deleteLink = document.createElement("a");
    deleteLink.setAttribute("href","#");
    deleteLink.textContent = "[Delete]";
    deleteLink.addEventListener("click",removeFromList);
    newItem.textContent = text;
    newItem.appendChild(deleteLink);
    listItem.appendChild(newItem);
    document.getElementById("newItemText").value = "";
    function removeFromList(el){
        const parent = el.target.parentNode;
        parent.remove();
    }
}
