function addItem() {
    let text = document.getElementById("newItemText").value;
    const listItem = document.getElementById("items");
    const newItem = document.createElement('li');
    newItem.textContent = text;
    listItem.appendChild(newItem);
    document.getElementById("newItemText").value = "";
}
